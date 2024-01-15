import schemaValidator from '@/lib/apiSchemaValidator';
import prismaClient from '@/lib/prisma';
import { validateRoute } from '@/lib/validate';
import { IUser } from '@/shared/hooks';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Yup from 'yup';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const data = new URL(req.url?.startsWith("/") ? `https://memeSocial.com/${req.url ?? ""}` : "").searchParams.get('search') ?? '';
    let memes;
    if (!data.includes(' ')) {
        memes = await prismaClient.files.findMany({
            where: {
                OR: [
                    {
                        summary: {
                            contains: data,
                        },
                    },
                    {
                        title: {
                            contains: data,
                        },
                    },
                    {
                        tags: {
                            contains: data,
                        },
                    },
                ],
            },
            take: 200,
            select: {
                fileId: true,
                shortDescription: true,
                title: true,
                type: true,
            },
        });
    } else {
        memes = await prismaClient.files.findMany({
            where: {
                OR: [
                    {
                        summary: {
                            search: data,
                        },
                    },
                    {
                        title: {
                            search: data,
                        },
                    },
                    {
                        tags: {
                            search: data,
                        },
                    },
                ],
            },
            take: 200,
            select: {
                fileId: true,
                shortDescription: true,
                title: true,
                type: true,
            },
        });
    }
    return res.json({ statusCode: 200, memes });
}

interface IUpload {
    address: string;
    title: string;
    fileURL: string;
    fileType: string;
    extraDetails: string[]; // Array of strings
    description: string;
    tags: {
        value: string;
        label: string;
    }[];
}

interface IChatCompletion {
    id: string;
    object: string;
    created: number;
    model: string;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
    choices: {
        message: {
            role: string;
            content: string;
        };
        finish_reason: string;
        index: number;
    }[];
}

const schema = Yup.object().shape({
    address: Yup.string().required(),
    title: Yup.string().required(),
    fileURL: Yup.string().required(),
    fileType: Yup.string().required(),
    extraDetails: Yup.array().of(Yup.string()),
    description: Yup.string().required(),
    tags: Yup.array()
        .of(
            Yup.object().shape({
                value: Yup.string().required(),
                label: Yup.string().required(),
            })
        )
        .min(1, 'recommended two tags needed'),
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { errors, payload: processed } = await schemaValidator<IUpload>(
        schema,
        req.body
    );
    if (errors || !processed) {
        return res.status(406).json({ errors });
    }
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
    };

    const exists = await prismaClient.files.findUnique({
        where: {
            fileId: processed.fileURL,
        },
    });
    try {
        if (!exists) {
            const payload = processed.fileType.startsWith('image')
                ? {
                    model: 'gpt-4-vision-preview',
                    messages: [
                        {
                            role: 'user',
                            content: [
                                {
                                    type: 'text',
                                    text: `1. Describe this image as best as you can for indexing system of image? 2. extract any useful tags or urban dictionary like words from the description provided "${processed.description}" and from your understanding of the Image provided NB: Append just the Keywords or tags(DON'T EXPLAIN IT), add characteristics like gender,color,facial expressions and so on`,
                                },
                                {
                                    type: 'image_url',
                                    image_url: {
                                        url: `https://gateway.lighthouse.storage/ipfs/${processed.fileURL}?s=40&v=4`,
                                        detail: 'low',
                                    },
                                },
                            ],
                        },
                    ],
                    max_tokens: 300,
                }
                : {
                    model: 'gpt-4-vision-preview',
                    messages: [
                        {
                            role: 'user',
                            content: [
                                {
                                    type: 'text',
                                    text: `1. Describe this series of frames from a video as best as you can for indexing system of videos? 2. extract any useful tags or urban dictionary like words from the description provided "${processed.description}" and from your understanding of the frames provided  NB: Append just the Keywords or tags(DON'T EXPLAIN IT), add characteristics like genders,colors,facial expressions and so on`,
                                },
                                ...processed.extraDetails.map((e) => ({
                                    type: 'image_url',
                                    image_url: {
                                        url: e,
                                        detail: 'low',
                                    },
                                })),
                            ],
                        },
                    ],
                    max_tokens: 1000,
                };

            try {
                const data = (
                    await axios.post(
                        'https://api.openai.com/v1/chat/completions',
                        payload,
                        {
                            headers,
                        }
                    )
                ).data as IChatCompletion;

                const meme = await prismaClient.files.upsert({
                    where: {
                        fileId: processed.fileURL,
                    },
                    update: {
                        summary: data.choices[0].message.content
                            .toLowerCase()
                            .includes(
                                "i'm sorry, but i can't provide assistance with that request"
                            )
                            ? processed.description
                            : data.choices[0].message.content.toLowerCase(),
                    },
                    create: {
                        creator: processed.address,
                        fileId: processed.fileURL,
                        shortDescription: processed.description,
                        summary: data.choices[0].message.content
                            .toLowerCase()
                            .includes(
                                "i'm sorry, but i can't provide assistance with that request"
                            )
                            ? processed.description
                            : data.choices[0].message.content.toLowerCase(),
                        url: processed.fileURL,
                        tags: processed.tags.map((e) => e.label.toLowerCase()).join(''),
                        title: processed.title,
                        type: processed.fileType,
                    },
                });
                return res.json(meme);
            } catch (e: any) {
                console.log(e);
                console.log(e.response?.data);
                return res.status(429).json({ error: e.response.data.error });
            }
        } else {
            return res.json(exists);
        }
    } catch (e: any) {
        console.log(e);
        console.log(e.response?.data);
        return res.status(400).json({ error: e.message });
    }
}


const MAIN = async (req: NextApiRequest, res: NextApiResponse, user?: IUser) => {
    if (req.method === "GET") {
        return GET(req, res)
    } else if (req.method === "POST" && user) {
        return POST(req, res)
    }
    else {
        return res.status(403).end
    }
};

export default validateRoute(MAIN, "allowAnonymous")