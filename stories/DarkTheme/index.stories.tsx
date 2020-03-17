import React, { FC, useState } from 'react';

import {
  Box,
  Button,
  colors,
  createScales,
  createTheme,
  darkColorTheme,
  Flex,
  Grid,
  Img,
  Link,
  List,
  ListItem,
  LoremIpsum,
  Text,
  XcoreProvider,
  Heading1,
  Paragraph,
  Heading2
} from '../../src';

export default { title: 'Dark Theme' };

const lightTheme = createTheme({});

const darkTheme = createTheme({
  ...createScales({
    ...colors(darkColorTheme)
  })
});

export const Basic: FC = () => {
  const [light, setTheme] = useState(true);

  return (
    <XcoreProvider theme={light ? lightTheme : darkTheme}>
      <Text>
        <Grid columns="repeat(3, 75px) auto" rows="200px auto 70px" gap="10px" p="10px" height="100%">
          {/* Sidebar */}
          <Heading2 column="1 / span 3" row="1" placeSelf="center">Lorem</Heading2>
          <Box column="1 / span 3" row="2">
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Jeff</ListItem>
              <ListItem>AAAA</ListItem>
            </List>
          </Box>
          <Box column="1 / span 2" row="3" alignSelf="center">
            @AlfonzAlfonz
            <br />
            <small><Link href="/">Logout</Link></small>
          </Box>
          <Box column="3 / span 1" row="3" placeSelf="center">
            <Img
              src="https://avatars0.githubusercontent.com/u/15893340?s=460&v=4"
              alt="avatar"
              style={{ width: '64px', height: '64px' }}
            />
          </Box>

          {/* Content */}
          <Flex
            column="4 / span 1"
            row="1"
            placeSelf="center"
            width="100%"
            height="100%"
            justifyContent="space-between"
          >
            <Heading1 alignSelf="center">Lorem ipsum dolor sit amet</Heading1>
            <Box >
              <Button onClick={() => setTheme(!light)}>{light ? 'Dark theme' : 'Light theme'}</Button>
            </Box>
          </Flex>
          <Box column="4 / span 1" row="2">
            <Paragraph>
              <LoremIpsum count={2} />
            </Paragraph>
            <Paragraph>
              <LoremIpsum count={2} />
            </Paragraph>
          </Box>

          {/* Footer */}
          <Box column="4 / span 1" row="3" placeSelf="center">
            footer &copy; 2020
          </Box>
        </Grid>
      </Text>
    </XcoreProvider>
  );
};
