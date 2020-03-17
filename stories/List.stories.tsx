import React, { FC } from 'react';

import { List, ListItem, LoremIpsum, Stack, Text, Box, Heading1, XcoreProvider } from '../src';

export default { title: 'List' };

export const BasicUsage: FC = () => {
  return (
    <XcoreProvider>
      <Text>
        <Heading1>Ordered</Heading1>
        <Stack gap="10px">
          <List v="ordered" flexBasis="0.5">
            <ListItem><LoremIpsum units="sentences" /></ListItem>
            <ListItem><LoremIpsum units="sentences" /></ListItem>
            <ListItem><LoremIpsum units="sentences" /></ListItem>
            <ListItem><LoremIpsum units="sentences" /></ListItem>
            <ListItem><LoremIpsum units="sentences" /></ListItem>
          </List>
          <Box as="ol" flexBasis="0.5">
            <li><LoremIpsum units="sentences" /></li>
            <li><LoremIpsum units="sentences" /></li>
            <li><LoremIpsum units="sentences" /></li>
            <li><LoremIpsum units="sentences" /></li>
            <li><LoremIpsum units="sentences" /></li>
          </Box>
        </Stack>
        <Heading1>Unordered</Heading1>
        <Stack gap="10px">
          <List v="unordered" flexBasis="0.5">
            <ListItem><LoremIpsum units="sentences" /></ListItem>
            <ListItem><LoremIpsum units="sentences" /></ListItem>
            <ListItem><LoremIpsum units="sentences" /></ListItem>
            <ListItem><LoremIpsum units="sentences" /></ListItem>
            <ListItem><LoremIpsum units="sentences" /></ListItem>
          </List>
          <Box as="ul" flexBasis="0.5">
            <li><LoremIpsum units="sentences" /></li>
            <li><LoremIpsum units="sentences" /></li>
            <li><LoremIpsum units="sentences" /></li>
            <li><LoremIpsum units="sentences" /></li>
            <li><LoremIpsum units="sentences" /></li>
          </Box>
        </Stack>
      </Text>
    </XcoreProvider>
  );
};
