import schemaValidator from "@/lib/apiSchemaValidator";
import prismaClient from "@/lib/prisma";
import { validateRoute } from "@/lib/validate";
import { IUser } from "@/shared/hooks";
import { NextApiRequest, NextApiResponse } from "next";

import * as Yup from 'yup';

const userInfoSchema = Yup.object().shape({
    description: Yup.string().required('Description is required'),
    instagram: Yup.string(),
    tiktok: Yup.string(),
    x: Yup.string().required('X is required'),
    avatar: Yup.string(), // Assuming this can be an optional field
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
});


type UserInfo = {
    description: string;
    instagram: string;
    tiktok: string;
    x: string;
    avatar: string;
    email: string;
};


export async function GET(req: NextApiRequest, res: NextApiResponse, user: { address: string }) {
    const data = new URL(req.url?.startsWith("/") ? `https://afrimeme.com/${req.url ?? ""}` : "").searchParams.get('search') ?? '';
    let memes;
    const _user = await prismaClient.account.findUnique({
        where: {
            address: user.address
        },
        include: {
            _count: {
                select: {
                    uploadedMemes: true
                }
            }
        }
    })
    if (!data.includes(' ')) {
        memes = await prismaClient.files.findMany({
            where: {
                AND: [
                    {
                        creator: user.address
                    }
                    , {
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
                    }]
            },
            take: 200,
            select: {
                fileId: true,
                shortDescription: true,
                title: true,
                type: true,
                downloadCount: true,
                _count: {
                    select: {
                        likedBy: {
                            where: {
                                isLiked: true
                            }
                        },
                        CommentsBy: true
                    }
                }
            },
        });
    } else {
        memes = await prismaClient.files.findMany({
            where: {
                AND: [
                    {
                        creator: user.address
                    }, {
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
                    }]
            },
            take: 200,
            select: {
                fileId: true,
                shortDescription: true,
                title: true,
                type: true,
                downloadCount: true,
                _count: {
                    select: {
                        likedBy: {
                            where: {
                                isLiked: true
                            }
                        },
                        CommentsBy: true
                    }
                }
            },
        });
    }
    return res.json({ statusCode: 200, memes, user: _user });
}


export async function POST(req: NextApiRequest, res: NextApiResponse, user: { address: string }) {

    const { errors, payload } = await schemaValidator<UserInfo>(userInfoSchema, req.body);
    if (errors || !payload) {
        return res.status(406).json({ errors });
    }

    const _user = await prismaClient.account.update({
        where: {
            address: user.address
        },
        data: {
            twitter: payload.x,
            profileDiscription: payload.description,
            email: payload.email,
            tiktok: payload.tiktok,
            instagram: payload.instagram,
            avatar: payload.avatar
        }
    })
    return res
        .status(200)
        .json({ user: _user });
}

const MAIN = async (req: NextApiRequest, res: NextApiResponse, user: IUser) => {
    if (req.method === "GET") {
        return GET(req, res, user)
    } else if (req.method === "POST") {
        return POST(req, res, user)
    }
    else {
        return res
            .status(403)
            .json({});
    }
};

export default validateRoute(MAIN, "min")