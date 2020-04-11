import 'jest-styled-components';

import { Box, Heading3, Stack } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('Stack component', () => {
  const component = renderer.create(
    <>
      <Stack direction="column" gap="10px">
        <Box>
          Box 1
        </Box>
        <Box>
          Box 2
        </Box>
      </Stack>
      <Stack direction="column" gap="10px" wrapItems>
        <Heading3>Title 1</Heading3>
        <Heading3>Title 2</Heading3>
        <Heading3>Title 3</Heading3>
      </Stack>
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
