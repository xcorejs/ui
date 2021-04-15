import React, { FC } from 'react';
import Head from 'next/head';
import { Heading1, Tag, Flex } from '@xcorejs/ui';

interface Props {
  title: string;
  themable: boolean;
}

const Header: FC<Props> = ({ title, themable }) => {
  return (
    <>
      <Head>
        <title>{title} | Xcore UI Documentation</title>
      </Head>
      <Flex alignItems="center">
        <Heading1>{title}</Heading1>
        {themable && <Tag ml="1rem">Themable</Tag>}
      </Flex>
    </>
  );
};

export default Header;
