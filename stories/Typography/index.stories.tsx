import React, { FC } from 'react';

import { Box, Typography, XcoreProvider } from '../../src';

export default { title: 'Typography' };

export const BasicUsage: FC = () => {
  return (
    <XcoreProvider>
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
    </XcoreProvider>
  );
};
