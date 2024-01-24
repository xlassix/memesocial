import prismaClient from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '@/lib/validate';
import { IUser } from '@/shared/hooks';

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse,
  user: IUser
) {
  try {
    const aggregations = await prismaClient.files.aggregate({
      where: {
        creator: user.address,
      },
      _sum: {
        downloadCount: true,
      },
      _count: true,
    });
    return res.json({
      balance: (
        aggregations._count + (aggregations._sum.downloadCount ?? 0)
      ).toFixed(2),
    });
  } catch (e) {
    return res.status(204).end();
  }
}

const MAIN = async (
  req: NextApiRequest,
  res: NextApiResponse,
  user?: IUser
) => {
  if (req.method === 'GET' && user) {
    return GET(req, res, user);
  } else if (req.method === 'POST') {
    return res.status(204).end();
  } else {
    return res.status(204).end();
  }
};

export default validateRoute(MAIN, 'min');
