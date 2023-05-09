import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  // getStaticProps will become getServerSideProps
  const allPostsData = getSortedPostsData();
  // getSortedPostsData = In this place we can call an API or Database Query
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  {/*
  For Client Side Rendering
  const allPostsData = getSortedPostsData();
  This is used hare
  Above code of function getStaticProps will not usd
  */}
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/images/profile.png' />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Abdul Khaliq Front End Developer. Soon I will a Web 3.0, AI, and Metaverse Developer, and also a Solopreneur. <br />In Shaa ALLAH!.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
      <h2><Link href={'/posts/first-post'}>First Post</Link></h2>
    </Layout>
  );
}