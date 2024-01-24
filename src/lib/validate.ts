import { NextApiResponse, NextApiRequest } from 'next';
import jwt from 'jsonwebtoken';
import prismaClient from './prisma';
import { get, set } from 'lodash';

export const validateRoute = (
  handler: any,
  mode: 'allowAnonymous' | 'min' | 'full' = 'full'
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies[`${process.env.accessTokenName}`];

    if (token) {
      let user;

      try {
        const data = jwt.verify(token, process.env.jwt_secret ?? '') as {
          [key: string]: string;
        };
        if (mode === 'min') {
          return handler(req, res, data);
        }
        user = await prismaClient.account.findUnique({
          where: { address: data.address },
        });

        if (!user) {
          throw new Error('Not real user');
        }
      } catch (e: any) {
        return res.status(401).end();
      }

      return handler(req, res, user);
    }

    return mode === 'allowAnonymous'
      ? handler(req, res, null)
      : res.status(401).end();
  };
};

type UserTokenDetails = {
  email: string;
  address: string;
};

export const validateToken = (token: string): UserTokenDetails => {
  const user = jwt.verify(token, process.env.jwt_secret ?? '');
  return user as UserTokenDetails;
};

const rateLimit = 10; // Number of allowed requests per minute

const rateLimiter = {};

export const rateLimiterMiddleware = (ip: string) => {
  const now = Date.now();
  const windowStart = now - 60 * 1000; // 1 minute ago

  const requestTimestamps = get(rateLimiter, ip, [] as number[]).filter(
    (timestamp) => timestamp > windowStart
  );
  requestTimestamps.push(now);

  set(rateLimiter, ip, requestTimestamps);

  return requestTimestamps.length <= rateLimit;
};
