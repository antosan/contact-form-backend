import { verify } from 'hcaptcha';
import type { NextApiRequest, NextApiResponse } from 'next';
import { HCAPTCHA_SECRET } from '../../../../env';
import { sendEmail } from '../send-email';

type SendEmailPayload = {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    // POST /api/send-email
    case 'POST': {
      const { body } = req;

      if (!body) {
        return res.status(400).json({ message: 'The request body was not specified for this request.' });
      }

      try {
        const { name, email, message, captchaToken }: SendEmailPayload = JSON.parse(body);
        const captchaData = await verify(HCAPTCHA_SECRET, captchaToken);
        if (!captchaData.success) {
          return res.status(500).json({ message: 'Confirm that you are human.' });
        }
        await sendEmail({ name, email, message });
        return res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        const message = error instanceof Error ? error.message : String(error);
        return res.status(500).json({ message });
      }
    }
    default: {
      return res.status(405).json({ message: `The HTTP '${req.method}' method is not allowed at this route.` });
    }
  }
}
