import 'dotenv/config';
import * as env from 'env-var';

export const SMTP_HOST = env.get('SMTP_HOST').required().asString();
export const SMTP_PORT = env.get('SMTP_PORT').required().asString();
export const SMTP_USER = env.get('SMTP_USER').required().asString();
export const SMTP_PASS = env.get('SMTP_PASS').required().asString();
export const SMTP_FROM = env.get('SMTP_FROM').required().asString();
export const HCAPTCHA_SECRET = env.get('HCAPTCHA_SECRET').required().asString();
