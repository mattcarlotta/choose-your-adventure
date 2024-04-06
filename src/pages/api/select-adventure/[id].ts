import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { ADVENTURES, ADVENTURE_STATUS } from '../../../data';

sgMail.setApiKey(process.env.SEND_GRID_API_KEY as string);

type Data = {
    error?: string;
    message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const adventure = ADVENTURES.find(
        ({ id, status }) => id === req.query.id && status === ADVENTURE_STATUS.AVAILABLE
    );
    if (!adventure) {
        return res.status(400).json({ error: 'You must select a valid adventure!' });
    }

    const emailAddress = process.env.EMAIL_ADDRESS;

    if (!emailAddress) {
        return res.status(403).json({ error: 'An adventure has already started...' });
    }

    const msg = {
        to: emailAddress,
        from: emailAddress,
        templateId: process.env.SEND_GRID_EMAIL_TEMPLATE_ID as string,
        dynamicTemplateData: {
            name: process.env.NEXT_PUBLIC_DATE_NAME as string,
            subscription: adventure.title
        }
    };

    try {
        await sgMail.send(msg);
    } catch (error) {
        return res.status(500).json({ error: error?.toString() });
    }

    delete process.env.EMAIL_ADDRESS;

    res.status(200).json({ message: 'Success!' });
}
