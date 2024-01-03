import schemaValidator from '@/lib/apiSchemaValidator';
import prismaClient from '@/lib/prisma';
import axios from 'axios';
import * as Yup from 'yup';

export async function GET(req: Request) {
  return Response.json({ statusCode: 200, message: 'API service' });
}

interface IUpload {
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
  title: Yup.string().required('Required'),
  fileURL: Yup.string().required('Required'),
  fileType: Yup.string().required('Required'),
  extraDetails: Yup.array().of(Yup.string()),
  description: Yup.string().required('Required'),
  tags: Yup.array()
    .of(
      Yup.object().shape({
        value: Yup.string().required(),
        label: Yup.string().required(),
      })
    )
    .min(1, 'recommended two tags needed'),
});

export async function POST(req: Request) {
  const { errors, payload: processed } = await schemaValidator<IUpload>(
    schema,
    await req.json()
  );
  if (errors || !processed) {
    return Response.json({ errors }, { status: 406 });
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
  const payload = processed.fileType.startsWith('image')
    ? {
        model: 'gpt-4-vision-preview',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `1. Describe this image as best as you can for indexing system of image? 2. extract any useful tags or urban dictionary like words from the description provided "${
                  processed.description + exists?.tags + ''
                }" NB: Append just the Keywords or tags(DON'T EXPLAIN IT)`,
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
                text: `1. Describe series of frames from a video as best as you can for indexing system of videos? 2. extract any useful tags or urban dictionary like words from the description provided "${
                  processed.description + exists?.tags + ''
                }" NB: Append just the Keywords or tags(DON'T EXPLAIN IT)`,
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
      await axios.post('https://api.openai.com/v1/chat/completions', payload, {
        headers,
      })
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
        fileId: processed.fileURL,
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
    return Response.json(meme);
  } catch (e: any) {
    console.log(e);
    console.log(e.response?.data);
    return Response.json({ error: e.response.data.error }, { status: 429 });
  }
}
