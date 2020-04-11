import {
  Box,
  Cell,
  Grid,
  Heading1,
  Heading2,
  List,
  LoremIpsum,
  Paragraph,
  Text,
  XcoreProvider
} from '@xcorejs/ui';
import React, { FC } from 'react';

export default { title: 'Grid' };

export const Basic: FC = () => (
  <XcoreProvider>
    <Text>
      <Grid columns="repeat(3, 75px) auto" rows="200px auto 70px" gap="10px" p="10px" height="100%">
        {/* Sidebar */}
        <Heading2 column="1 / span 3" row="1" placeSelf="center">Lorem</Heading2>
        <Box column="1 / span 3" row="2">
          <List>
            <li>Home</li>
            <li>Blog</li>
            <li>Jeff</li>
            <li>AAAA</li>
          </List>
        </Box>
        <Box column="1 / span 2" row="3" alignSelf="center">
          @AlfonzAlfonz
          <br />
          <small><a href="/">Logout</a></small>
        </Box>
        <Box column="3 / span 1" row="3" placeSelf="center">
          <img
            src="https://avatars0.githubusercontent.com/u/15893340?s=460&v=4"
            alt="avatar"
            style={{ width: '64px', height: '64px' }}
          />
        </Box>

        {/* Content */}
        <Heading1 column="4 / span 1" row="1" placeSelf="center" >Lorem ipsum dolor sit amet</Heading1>
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

export const IE11: FC = () => (
  <XcoreProvider>
    <Text>
      <Grid columns="repeat(3, 75px) auto" rows="200px auto 70px" gap="10px" p="10px" height="100%">
        {/* Sidebar */}
        <Cell column="1 / span 3" row="1" placeSelf="center">
          <Heading2>Lorem</Heading2>
        </Cell>
        <Cell column="1 / span 3" row="2">
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Jeff</li>
            <li>AAAA</li>
          </ul>
        </Cell>
        <Cell column="1 / span 2" row="3" alignSelf="center">
          @AlfonzAlfonz
          <br />
          <small><a href="/">Logout</a></small>
        </Cell>
        <Cell column="3 / span 1" row="3" placeSelf="center">
          <img
            src="https://avatars0.githubusercontent.com/u/15893340?s=460&v=4"
            alt="avatar"
            style={{ width: '64px', height: '64px' }}
          />
        </Cell>

        {/* Content */}
        <Cell column="4 / span 1" row="1" placeSelf="center">
          <Heading1>Lorem ipsum dolor sit amet</Heading1>
        </Cell>
        <Cell column="4 / span 1" row="2">
          <Paragraph>
            <LoremIpsum count={2} />
          </Paragraph>
          <Paragraph>
            <LoremIpsum count={2} />
          </Paragraph>
        </Cell>

        {/* Footer */}
        <Cell column="4 / span 1" row="3" placeSelf="center">
          footer &copy; 2020
        </Cell>
      </Grid>
    </Text>
  </XcoreProvider>
);
