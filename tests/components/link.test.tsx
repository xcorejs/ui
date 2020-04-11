import 'jest-styled-components';

import { List, ListItem, LoremIpsum } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('Link component', () => {
  const component = renderer.create(
    <>
      <List v="ordered" flexBasis="0.5">
        <ListItem><LoremIpsum units="sentences" /></ListItem>
        <ListItem><LoremIpsum units="sentences" /></ListItem>
        <ListItem><LoremIpsum units="sentences" /></ListItem>
        <ListItem><LoremIpsum units="sentences" /></ListItem>
        <ListItem><LoremIpsum units="sentences" /></ListItem>
      </List>
      <List v="unordered" flexBasis="0.5">
        <ListItem><LoremIpsum units="sentences" /></ListItem>
        <ListItem><LoremIpsum units="sentences" /></ListItem>
        <ListItem><LoremIpsum units="sentences" /></ListItem>
        <ListItem><LoremIpsum units="sentences" /></ListItem>
        <ListItem><LoremIpsum units="sentences" /></ListItem>
      </List>
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
