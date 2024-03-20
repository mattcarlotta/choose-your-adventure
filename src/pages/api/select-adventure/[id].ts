import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { ADVENTURES } from "../../../data";

sgMail.setApiKey(String(process.env.SEND_GRID_API_KEY));

type Data = {
    error?: string;
    message?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const adventure = ADVENTURES.find(({ id }) => id === req.query.id);
    if (!adventure) {
        return res.status(400).json({ error: "You must select a valid adventure!" });
    }

    const emailAddress = process.env.EMAIL_ADDRESS || "";

    if (!emailAddress) {
        return res.status(403).json({ error: "You've already selected an adventure!" });
    }

    const msg = {
        to: emailAddress,
        from: emailAddress,
        templateId: String(process.env.SEND_GRID_EMAIL_TEMPLATE_ID),
        dynamicTemplateData: {
            name: "Katy",
            subscription: adventure.title,
        },
    };

    try {
        await sgMail.send(msg);
    } catch (error) {
        return res.status(500).json({ error: error?.toString() });

    }

    delete process.env.EMAIL_ADDRESS;

    res.status(200).json({ message: "Success!" });
}

