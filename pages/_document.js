import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import sprite from 'svg-sprite-loader/runtime/sprite.build';
import HeadFavicon from '../src/components/HeadFavicon';
import HeadMeta from '../src/components/HeadMeta';
import Fonts from '../src/components/Fonts';
import HeadAnalytics from '../src/components/HeadAnalytics';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const spriteContent = sprite.stringify();

    return {
      spriteContent,
      ...initialProps,
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, minimal-ui, shrink-to-fit=no"
          />
          <HeadMeta />
          <HeadFavicon />
          <HeadAnalytics />
        </Head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
          <Main />
          <NextScript />
          <Fonts />
        </body>
      </html>
    );
  }
}
