import { XcoreProvider, Heading1, Heading2, Heading3, Link } from '@xcorejs/ui';
import NextApp from 'next/app';
import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout';
import { theme } from '../theme';
import { MDXProvider } from '@mdx-js/react';
import { CodeBlock } from '../components/CodeBlock';
import { PropsContext } from 'components/PropsContext';

const pages: [string | undefined, [string, string][]][] = [
  [undefined, [
    ['Getting started', '/getting-started'],
    ['Philosophy', '/philosophy']
  ]],
  ['Principles', [
    ['Underscore props', '/underscore-props'],
    ['Theme', '/theme'],
    ['Scales', '/scales']
  ]],
  ['Components', [
    ['Aspect Ratio', '/aspectRatio'],
    ['Button', '/button'],
    ['Collapse', '/collapse'],
    ['Flex', '/flex'],
    ['Icon', '/icon'],
    ['Img', '/image'],
    ['Link', '/link'],
    ['Tag', '/tag']
  ]]
];

const props = {
  FlexProps: '/flex'
};

const mdxComponents = {
  pre: (p: any) => <div {...p} />,
  code: CodeBlock,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  a: Link
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
          <PropsContext.Provider value={props}>
            <MDXProvider components={mdxComponents}>
              <Layout pages={pages}>
                <Component {...pageProps} />
              </Layout>

            </MDXProvider>
          </PropsContext.Provider>
        </XcoreProvider>
      </>
    );
  }
}

export default App;
