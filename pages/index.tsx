import { Accordion } from "@/features/theming/components/Accordion/Accordion";
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
        <h1>Radix components with Material styles</h1>
        
        <h2>Accordion</h2>
        <Accordion />
      </main>
    </>
  );
}
