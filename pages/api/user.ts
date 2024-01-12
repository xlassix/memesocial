import schemaValidator from "@/lib/apiSchemaValidator";
import prismaClient from "@/lib/prisma";
import { validateRoute } from "@/lib/validate";
import { NextApiRequest, NextApiResponse } from "next";

import * as Yup from 'yup';

const userInfoSchema = Yup.object().shape({
    description: Yup.string().required('Description is required'),
    instagram: Yup.string().required('Instagram handle is required'),
    tiktok: Yup.string().required('TikTok handle is required'),
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

const MAIN = async (req: NextApiRequest, res: NextApiResponse, user: any) => {
    if (req.method === "GET") {
        return res
            .status(200)
            .json({ user: user });
    } else if (req.method === "POST") {
        return POST(req, res, user)
    }
    else {
        return res
            .status(403)
            .json({});
    }
};

export default validateRoute(MAIN)