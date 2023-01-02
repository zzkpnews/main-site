import { NextSeo } from "next-seo";
import Head from "next/head";

export const PageSEO = (props: { title: string; describe?: string }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo title={props.title} description={props.describe} />
    </>
  );
};
