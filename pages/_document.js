import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import HeadFavicon from '../src/components/HeadFavicon';
import HeadMeta from '../src/components/HeadMeta';
import Fonts from '../src/components/Fonts';
import HeadAnalytics from '../src/components/HeadAnalytics';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <HeadMeta />
          <HeadFavicon />
          <HeadAnalytics />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Fonts />
        </body>
      </Html>
    );
  }
}
