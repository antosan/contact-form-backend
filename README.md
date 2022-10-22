## contact-form-backend

Integrating [hCaptcha](https://www.hcaptcha.com/) to a NextJS contact form.

## Run Locally

```bash
git@github.com:antosan/contact-form-backend.git
cd contact-form-backend
npm install
cp .env.example .env # provide env variables
npm run dev
```

## Local Development

If you are developing on your local machine there are a few things to keep in mind.

Modern browsers have strict CORS and CORB rules, so opening a `file://URI` that loads hCaptcha will not work. Loading hCaptcha from `http://localhost/` will encounter the same issue on some browsers. The hCaptcha API also prohibits `localhost` and `127.0.0.1` as supplied hostnames.

The simplest way to circumvent these issues is to add a hosts entry. For example:

```bash
127.0.0.1 test.mydomain.com
```

Place this in `/etc/hosts` on Linux or Mac OS, or `C:\Windows\System32\Drivers\etc\hosts` on Windows.

You can then access your local server via http://test.mydomain.com, and everything will work as expected.
