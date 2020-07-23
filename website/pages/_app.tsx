import { XcoreProvider, Heading1, Heading2, Heading3 } from '@xcorejs/ui';
import NextApp from 'next/app';
import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout';
import { theme } from '../theme';
import { MDXProvider } from '@mdx-js/react';
import { CodeBlock } from '../components/CodeBlock';

const pages: [string, string][] = [
  ['Getting started', '/getting-started'],
  ['Principles', '/getting-started'],
  ['Philosophy', '/getting-started']
];

const components: [string, string][] = [
  ['Aspect Ratio', '/aspectRatio'],
  ['Button', '/button'],
  ['Collapse', '/collapse'],
  ['Icon', '/icon'],
  ['Image', '/image'],
  ['Link', '/link'],
  ['Tag', '/tag']
];

const mdxComponents = {
  pre: props => <div {...props} />,
  code: CodeBlock,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3
};

class App extends NextApp {
  render () {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title key="title">Xcore UI</title>
        </Head>

        <XcoreProvider theme={theme}>
          <MDXProvider components={mdxComponents}>
            <Layout pages={pages} components={components}>
              <Component {...pageProps} />
            </Layout>

          </MDXProvider>
        </XcoreProvider>
      </>
    );
  }
}

export default App;
