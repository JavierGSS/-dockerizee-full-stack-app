import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        Read <Link href="/posts/first-post">this page</Link>
      </h1>
      <Layout Head home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hi, I'm Baba and I enjoy coding.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
    </>
  );
}
