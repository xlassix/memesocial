import schemaValidator from '@/lib/apiSchemaValidator';
import * as yup from 'yup';
import prismaClient from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { rateLimiterMiddleware } from '@/lib/validate';

export interface IDownloaded {
  cid: string;
}

const schema = yup.object().shape({
  cid: yup.string().required(),
});

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return res.status(204).end();
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const ip = (req.headers['x-real-ip'] ||
    req?.connection?.remoteAddress) as string;
  if (!rateLimiterMiddleware(ip)) {
    res.status(429).json({ message: 'Too many requests' });
  }
  const { errors, payload } = await schemaValidator<IDownloaded>(
    schema,
    req.body
  );
  if (errors || !payload) {
    return res.status(406).json({ errors });
  }
  try {
    await prismaClient.files.update({
      where: {
        fileId: payload.cid,
      },
      data: {
        downloadCount: { increment: 1 },
      },
    });
    return res.status(204).end();
  } catch (e) {
    return res.status(204).end();
  }
}

const MAIN = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return GET(req, res);
  } else if (req.method === 'POST') {
    return POST(req, res);
  } else {
    return res.status(204).end();
  }
};

export default MAIN;
