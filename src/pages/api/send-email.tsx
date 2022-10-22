import { createTransport } from 'nodemailer';
import { renderToString } from 'react-dom/server';
import { SMTP_FROM, SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } from '../../../env';
import type { EmailOptions } from '../../types';

export async function sendEmail(options: EmailOptions) {
  const subject = 'Form submission';
  const body = renderToString(
    <p>
      Name: {options.name}
      <br />
      Email: {options.email}
      <br />
      Message: {options.message}
    </p>,
  );

  const transport = createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transport.sendMail({
    to: SMTP_FROM,
    from: SMTP_FROM,
    subject,
    html: body,
  });
}
