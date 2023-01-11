import { NextSeo } from "next-seo";
import Head from "next/head";

export const PageSEO = (props: {
  title: string;
  describe?: string;
  keywords?: string;
}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={props.keywords} />
      </Head>
      <NextSeo title={props.title} description={props.describe} />
    </>
  );
};
