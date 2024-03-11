import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Radix with MUI</title>
        <meta name="description" content="POC on Radix components using MUI styles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Hello, this is a POC app to use Radix components with Material styles
      </main>
    </>
  );
}
