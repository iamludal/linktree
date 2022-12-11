import { USER } from "@/config";
import Head from "next/head";

const SEO = () => (
  <Head>
    <title>{USER.name}</title>
    <meta name="description" content={USER.bio} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;
