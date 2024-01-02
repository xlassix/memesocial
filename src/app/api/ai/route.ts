import axios from 'axios';

export async function GET(req: Request) {
  return Response.json({ statusCode: 200, message: 'API service' });
}

export async function POST(req: Request) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
  };

  const payload = {
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Describe this image as best as you can for indexing system of image?',
          },
          {
            type: 'image_url',
            image_url: {
              url: `https://gateway.lighthouse.storage/ipfs/QmfD2GirwXAdcp4AYfE3bSyRY7yEAPRsW5zkbt7P9nU49h?s=40&v=4`,
              detail: 'low',
            },
          },
        ],
      },
    ],
    max_tokens: 300,
  };

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      payload,
      { headers }
    );
    const data = response.data;
    return Response.json(data);
  } catch (e: any) {
    console.log(e);
    console.log(e.response?.data);
    return Response.json({ error: e.response.data.error }, { status: 429 });
  }
}
