import App, { Container } from 'next/app';
import React from 'react';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import '../src/stylesheets/index.scss';
import Head from 'next/head';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, minimal-ui, shrink-to-fit=no"
          />
        </Head>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}
