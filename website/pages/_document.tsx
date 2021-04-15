import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

class Document extends NextDocument {
  static async getInitialProps (ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: sheet.getStyleElement()
      };
    } finally {
      sheet.seal();
    }
  }

  render () {
    const { styles } = this.props;
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap&subset=latin-ext"
            rel="stylesheet"
          />
          <link rel="author" href="https://appio.cz" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />
          {styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
