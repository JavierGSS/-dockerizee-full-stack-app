import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout Head>
      <Head>
        <title>My First Next.js App</title>
      </Head>
      <h1>Second Post</h1>
      <h2>
        <Link href="/posts/first-post">First Post</Link>
      </h2>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/calaca.jpg"
        height={150}
        width={150}
        alt="calaca"
        priority={true}
      />
    </Layout>
  );
}
