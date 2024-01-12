import { NextApiResponse, NextApiRequest } from 'next';
import jwt from 'jsonwebtoken';
import prismaClient from './prisma';

export const validateRoute = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies[`${process.env.accessTokenName}`];

    if (token) {
      let user;

      try {
        const { address } = jwt.verify(token, process.env.jwt_secret ?? '') as {
          [key: string]: string;
        };
        user = await prismaClient.account.findUnique({
          where: { address },
        });

        if (!user) {
          throw new Error('Not real user');
        }
      } catch (e: any) {
        console.log(e?.message);
        return res.status(401).end();
      }

      return handler(req, res, user);
    }
    return res.status(401).end();
  };
};

export const validateToken = (token: string) => {
  const user = jwt.verify(token, process.env.jwt_secret ?? '');
  return user;
};
