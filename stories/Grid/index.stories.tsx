import React, { FC } from 'react';
import { Grid, Cell, Text, XcoreGlobal, LoremIpsum, Typography, Box } from '../../src';

export default { title: 'Grid' };

export const Basic: FC = () => (
  <Text>
    <XcoreGlobal />
    <Grid columns="repeat(3, 75px) auto" rows="200px auto 70px" gap="10px" p="10px" height="100%">
      {/* Sidebar */}
      <Typography column="1 / span 3" row="1" placeSelf="center" t="h2">Lorem</Typography>
      <Box column="1 / span 3" row="2">
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Jeff</li>
          <li>AAAA</li>
        </ul>
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
      <Typography column="4 / span 1" row="1" placeSelf="center" t="h1">Lorem ipsum dolor sit amet</Typography>
      <Box column="4 / span 1" row="2">
        <Typography t="p">
          <LoremIpsum count={2} />
        </Typography>
        <Typography t="p">
          <LoremIpsum count={2} />
        </Typography>
      </Box>

      {/* Footer */}
      <Box column="4 / span 1" row="3" placeSelf="center">
            footer &copy; 2020
      </Box>
    </Grid>
  </Text>
);

export const IE11: FC = () => (
  <Text>
    <XcoreGlobal />
    <Grid columns="repeat(3, 75px) auto" rows="200px auto 70px" gap="10px" p="10px" height="100%">
      {/* Sidebar */}
      <Cell column="1 / span 3" row="1" placeSelf="center">
        <Typography t="h2">Lorem</Typography>
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
        <Typography t="h1">Lorem ipsum dolor sit amet</Typography>
      </Cell>
      <Cell column="4 / span 1" row="2">
        <Typography t="p">
          <LoremIpsum count={2} />
        </Typography>
        <Typography t="p">
          <LoremIpsum count={2} />
        </Typography>
      </Cell>

      {/* Footer */}
      <Cell column="4 / span 1" row="3" placeSelf="center">
            footer &copy; 2020
      </Cell>
    </Grid>
  </Text>
);
