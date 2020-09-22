import React, { FC } from 'react';
import Head from 'next/head';
import { Heading1 } from '@xcorejs/ui';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title} | Xcore UI Documentation</title>
      </Head>
      <Heading1>{title}</Heading1>
    </>
  );
};

export default Header;
