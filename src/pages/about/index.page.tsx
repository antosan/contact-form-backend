import Head from 'next/head';
import Button from '../../components/Button';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <main className="flex mt-10 flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">About!</h1>
        <Button>Click Me</Button>
      </main>
    </>
  );
}
