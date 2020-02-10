import { Box, Typography, createTheme } from 'index';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export default { title: 'Typography' };

export const BasicUsage: FC = () => {
  return (
    <ThemeProvider theme={createTheme({})}>
      <Box>
        <Typography type="h1">Heading 1</Typography>
        <Typography type="h2">Heading 2</Typography>
        <Typography type="h3">Heading 3</Typography>
        <Typography type="h4">Heading 4</Typography>
        <Typography type="h5">Heading 5</Typography>
        <Typography type="h6">Heading 6</Typography>
        <Typography type="p">Paragraph</Typography>
        <Typography type="lead">Lead</Typography>
        <hr />
        <Typography type="h2" as="h3">Heading 2 as h3</Typography>
      </Box>
    </ThemeProvider>
  );
};
