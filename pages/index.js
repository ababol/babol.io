import React from 'react';
import Head from 'next/head';

import Header from '../src/components/Header';
import BlockBlogPosts from '../src/components/BlockBlogPosts';
if (typeof fetch === 'undefined') {
  require('isomorphic-fetch');
}

const Home = ({ blogPosts }) => (
  <>
    <Head>
      <title>Arnaud Babol</title>
    </Head>

    <Header />
    <BlockBlogPosts posts={blogPosts} />
  </>
);

Home.getInitialProps = async () => {
  const res = await fetch('https://medium.com/@ababol/latest?format=json');

  // medium returns ])}while(1);</x> to prevent JSON calling :/
  const text = await res.text();
  const json = text.replace('])}while(1);</x>', '');

  return { blogPosts: Object.values(JSON.parse(json).payload.references.Post) };
};

export default Home;
