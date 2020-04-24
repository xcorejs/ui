import 'jest-styled-components';

import { Box } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('Box component', () => {
  const component = renderer.create(
    <>
      <Box>Empty</Box>
      <Box
        background="crimson"
        color="white"
        p="10px"
        my="15px"
      >
        Box 1
      </Box>
      <Box
        background="navy"
        color="white"
        p="10px"
        my="15px"
        _hover={{
          background: { _: 'crimson', md: 'green' }
        }}
      >
        Box 2
      </Box>
      <Box
        background="navy"
        color="white"
        p="10px"
        my="15px"
        _before={{
          content: '"before"',
          background: 'green'
        }}
        _after={{
          content: '"after"',
          background: 'green'
        }}
      >
        Box 3
      </Box>

      <Box role="group">
        <Box>Outside</Box>
        <Box _group={{ _hover: { background: 'navy' } }}>Inside</Box>
      </Box>
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
