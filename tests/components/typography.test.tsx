import 'jest-styled-components';

import { Box, Typography } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('Typography component', () => {
  const component = renderer.create(
    <>
      <Box>
        <Typography variant="h1" mb="4rem">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="p">Paragraph</Typography>
        <Typography variant="lead">Lead</Typography>
        <hr />
        <Typography variant="h2" as="h3">Heading 2 as h3</Typography>
      </Box>
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
