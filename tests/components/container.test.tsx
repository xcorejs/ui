import 'jest-styled-components';

import { Box, Container } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('Container component', () => {
  const component = renderer.create(
    <Container>
      <Box width="100%">
        <Box background="crimson" color="white" p="10px" my="10px">
          Box 1
        </Box>
        <Box background="navy" color="white" p="10px" my="10px">
          Box 2
        </Box>
      </Box>
    </Container>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
