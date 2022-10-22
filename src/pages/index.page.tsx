import HCaptcha from '@hcaptcha/react-hcaptcha';
import Head from 'next/head';
import type { FormEvent } from 'react';
import { useRef, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [captchaToken, setCaptchaToken] = useState('');
  const captchaRef = useRef<HCaptcha>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const {
      elements: {
        name: { value: name },
        email: { value: email },
        message: { value: message },
      },
    } = event.target as typeof event.target & {
      elements: {
        name: HTMLInputElement;
        email: HTMLInputElement;
        message: HTMLInputElement;
      };
    };

    if (!captchaToken) {
      setErrorMessage('Confirm that you are human.');
      setStatus('error');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');
    setStatus(null);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify({ name, email, message, captchaToken }),
      });
      if (!response.ok) {
        const error = await response.json();
        setErrorMessage(error.message);
        setStatus('error');
        return;
      }
      setStatus('success');
      formRef.current?.reset();
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'There was an error sending the email, please try again.';
      setErrorMessage(message);
      setStatus('error');
    } finally {
      captchaRef.current?.resetCaptcha();
      setSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title>Index</title>
      </Head>

      <main className="flex mt-10 flex-col items-center justify-center gap-4 container mx-auto px-4">
        <h1 className="text-3xl font-bold">Welcome!</h1>

        <form ref={formRef} className="space-y-4 w-full md:w-96" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <HCaptcha ref={captchaRef} sitekey="a00d2c0c-9083-4805-a0c2-1a2c9d2cd018" onVerify={setCaptchaToken} />

          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full disabled:cursor-not-allowed disabled:opacity-30"
            disabled={submitting}
          >
            {submitting ? 'Sending message...' : 'Send message'}
          </button>

          {status ? (
            <p
              className={`mt-2 text-sm text-gray-500 text-center ${
                status === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {status === 'success' ? 'Email sent successfully.' : errorMessage}
            </p>
          ) : null}
        </form>
      </main>
    </>
  );
}
