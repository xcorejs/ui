import React, { FC } from 'react';
import { Img, Typography, Stack, List, ListItem, Container, Heading3, Box, Heading2, Link, Flex } from '@xcorejs/ui';
import NextLink from 'next/link';

interface Props {
  pages: [string, string][];
  components: [string, string][];
}

const Layout: FC<Props> = ({ children, pages, components }) => {
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
            <Stack direction="column" width="20rem">
              <List _bullet={{ content: '' }} _items={{ lineHeight: '2' }}>
                {pages.map(([label, link]) => (
                  <ListItem>
                    <NextLink key={label + link} href={link} passHref>
                      <Link display="block">
                        {label}
                      </Link>
                    </NextLink>
                  </ListItem>
                ))}
              </List>

              <Box>
                <Heading2 fontSize="1.6rem">Components</Heading2>
                <List _bullet={{ content: '' }} _items={{ lineHeight: '2' }}>
                  {components.map(([label, link]) => (
                    <ListItem>
                      <NextLink key={label + link} href={link} passHref>
                        <Link display="block">
                          {label}
                        </Link>
                      </NextLink>
                    </ListItem>
                  ))}
                </List>
              </Box>
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
