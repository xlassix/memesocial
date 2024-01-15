import schemaValidator from '@/lib/apiSchemaValidator';
import * as yup from 'yup';
import { ethers } from 'ethers';
import { buildSignMessage } from '@/lib/helper';
import prismaClient from '@/lib/prisma';
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from 'next'
import cookie from "cookie";
import { validateRoute } from '@/lib/validate';
import { IUser } from '@/shared/hooks';

function getCurrentUTC() {
    const now = new Date();
    const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

    return utc;
}

export interface ILogin {
    address: string;
    signature: string;
    time: string
}

const schema = yup.object().shape({
    address: yup
        .string()
        .required()
        .transform((value) => value.toLowerCase()),
    signature: yup
        .string()
        .required(),
    time: yup
        .string()
        .required()

})


// Get User info
export async function GET(req: NextApiRequest, res: NextApiResponse, user?: IUser) {
    return res.json({ statusCode: 200, user, time: getCurrentUTC() });
}


// SignIn
export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { errors, payload } = await schemaValidator<ILogin>(schema, req.body);
    if (errors || !payload) {
        return res.status(406).json({ errors });
    }

    // Get the signer's address
    const signerAddress = await ethers.utils.verifyMessage(buildSignMessage(payload.address, payload.time), payload.signature);
    if (signerAddress.toLowerCase() !== payload.address) {
        return res.status(400).json({ errors: ["Invalid Signature"], status: 406 });
    }
    let user;

    let token = ""
    user = await prismaClient.account.findUnique({
        where: {
            address: payload.address
        },
    });
    if (!user) {
        user = await prismaClient.account.create({
            data: {
                address: payload.address,
                lastSeen: getCurrentUTC()
            }
        })
    }
    if (user.lastSeen.getTime() >= getCurrentUTC().getTime()) {
        return res
            .status(406)
            .json({ errors: [`LoginFailed`] });

    }
    user = await prismaClient.account.update({
        where: {
            address: payload.address
        },
        data: {
            lastSeen: getCurrentUTC()
        }
    })

    token = jwt.sign(
        {
            email: user.email,
            address: user.address,
            time: getCurrentUTC(),
        },
        process.env.jwt_secret ?? "Supersecret",
        { expiresIn: "8h" }
    );

    res.setHeader(
        "Set-Cookie",
        cookie.serialize(process.env.accessTokenName ?? "MemeSocial", token, {
            httpOnly: true,
            maxAge: 8 * 60 * 60,
            path: "/",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        })
    );


    return res
        .status(202)
        .json({ user, token, key: process.env.accessTokenName, time: getCurrentUTC() });

}


//Logout
export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize(process.env.accessTokenName ?? "MemeSocial", "", {
            httpOnly: true,
            maxAge: 1 * 60,
            path: "/",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        })
    );


    return res
        .status(202)
        .json({ time: getCurrentUTC() });
}


export async function PUT(req: NextApiRequest, res: NextApiResponse, user?: IUser) {
    if (!user) {
        return res
            .status(401)
            .end()
    }
    const _user = await prismaClient.account.update({
        where: {
            address: user.address
        },
        data: req.body
    })
    return res
        .status(200)
        .json({ user: _user, time: getCurrentUTC() });
}


const MAIN = async (req: NextApiRequest, res: NextApiResponse, user?: IUser) => {
    if (req.method === "GET") {
        return GET(req, res, user)
    } else if (req.method === "POST") {
        return POST(req, res)
    }
    else if (req.method === "PUT") {
        return PUT(req, res, user)
    }
    else {
        return DELETE(req, res);
    }
};

export default validateRoute(MAIN, "allowAnonymous")