import React, { FC } from 'react';
import { Img, Typography, Stack, List, ListItem, Container, Heading3, Box, Heading2, Link, Flex } from '@xcorejs/ui';
import NextLink from 'next/link';

interface Props {
  pages: [string| undefined, [string, string][]][];
}

const Layout: FC<Props> = ({ children, pages }) => {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <Box height="100%">
        <Flex
          p="1.6rem"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderColor="grey"
          height="6.4rem"
        >
          <NextLink href="/">
            <a><Img height="4.8rem" src="/logo-primary.svg" alt="Logo" /></a>
          </NextLink>

          <Typography as="div">
            <Link href="https://github.com/xcorejs/ui" target="_blank">Github</Link>
          </Typography>
        </Flex>

        <Container mt="4rem">
          <Stack gap="5rem" width="100%">
            <Stack gap="1rem" direction="column" width="20rem" flexShrink={0}>
              {pages.map(([heading, p]) =>
                <MenuList key={heading} heading={heading} pages={p} />
              )}
            </Stack>

            <Typography as="div" px="10rem" borderLeft="1px solid" borderColor="grey" flexGrow={1}>
              {children}
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Flex justifyContent="flex-end">
        <Typography p="1rem">Appio 2020</Typography>
      </Flex>
    </Flex>
  );
};

export default Layout;

const MenuList: FC<{heading?: string; pages: [string, string][]}> = ({ heading, pages, ...props }) => (
  <Box {...props}>
    {heading && <Heading2 my=".5rem" fontSize="1.6rem">{heading}</Heading2>}
    <List _bullet={{ content: '' }} _items={{ lineHeight: '2' }}>
      {pages.map(([label, link]) => (
        <ListItem key={label + link}>
          <NextLink href={link} passHref>
            <Link display="block">
              {label}
            </Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  </Box>
);
