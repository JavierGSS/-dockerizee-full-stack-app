import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function FirstPost() {
  return (
    <>
      <Layout Head>
        <Head>
          <title>My First Next.js App</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/posts/second-post">Second Post</Link>
        </h2>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
        <Image
          src="/honda.jpg"
          height={150}
          width={150}
          alt="slingshot"
          priority={true}
        />
      </Layout>
    </>
  );
}
