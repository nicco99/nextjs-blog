import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {

  const res = await fetch('http://localhost:5000/products');
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      products: await res.json()
    },
  };
}



export default function Home({allPostsData,products}) {
  console.log(products.data)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}