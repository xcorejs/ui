import React, { FC } from 'react';
import { Img, Typography, Stack, List, ListItem, Container, Heading3, Box, Heading2, Link, Flex } from '@xcorejs/ui';
import NextLink from 'next/link';

interface Props {
  pages: [string, string][];

  components: [string, string][];
}

const Layout: FC<Props> = ({ children, pages, components }) => {
  return (
    <>
      <Stack
        p="1.6rem  "
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
          <Link href="https://github.com/xcorejs/ui">Github</Link>
        </Typography>
      </Stack>
      <Container mt="4rem">
        <Stack gap="5rem" width="100%">
          <Stack direction="column">
            <List _bullet={{ content: '' }} _items={{ lineHeight: '2' }}>
              {pages.map(([label, link]) => (
                <NextLink key={label + link} href={link} passHref>
                  <Link display="block">
                    <ListItem>
                      {label}
                    </ListItem>
                  </Link>
                </NextLink>
              ))}
            </List>
            <Box>
              <Heading2 fontSize="1.6rem">Components</Heading2>
              <List _bullet={{ content: '' }} _items={{ lineHeight: '2' }}>
                {components.map(([label, link]) => (
                  <NextLink key={label + link} href={link} passHref>
                    <Link>
                      <ListItem>
                        {label}
                      </ListItem>
                    </Link>
                  </NextLink>
                ))}
              </List>
            </Box>
          </Stack>

          <Typography as="div" px="10rem" borderLeft="1px solid" borderColor="grey" flexGrow={1}>
            {children}
          </Typography>
        </Stack>
      </Container>
      <Flex height="15rem" alignItems="flex-end" justifyContent="flex-end">
        <Typography p="1rem">Appio 2020</Typography>
      </Flex>
    </>
  );
};

export default Layout;
