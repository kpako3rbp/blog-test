import Head from 'next/head';
import Link from 'next/link';

import Layout from '@/components/layout';
import { getSortedPostsData } from '@/lib/posts';

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home = (props) => {
  const { allPostsData } = props;
  return (
    <Layout home>
      <Head>
        <title>Test blog</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main>
        <section className="headingMd padding1px">
          <ul className="list">
            {allPostsData.map((post) => {
              const { id, date, title } = post;
              return (
                <li key={id} className="listItem">
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className="lightText">{date}</small>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
