import App, { Container } from 'next/app';
import React from 'react';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import '../src/stylesheets/index.scss';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </Container>
    );
  }
}
