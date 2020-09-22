import React, { FC, useState, useMemo } from 'react';

import { Box, createScales } from '../src';
import { emptyTheme, createTheme } from '../src/theme';
import { darkColorTheme, colors } from '../src/scales/colors';

export default { title: 'Box' };

export const BasicUsage: FC = () => {
  return (
    <Box>
      <Box background="crimson" color="white" p="10px" my="15px">
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
    </Box>
  );
};

export const Colors: FC = () => {
  const [dark, setDark] = useState(false);
  const theme = useMemo(() =>
    dark
      ? createTheme({
        ...createScales({
          ...colors(darkColorTheme)
        })
      })
      : createTheme(), [dark]);

  return (
    <Box>
      <Box as="button" onClick={() => setDark(s => !s)}>Switch theme</Box>
      <br />

      Primary
      <Box width="64px" height="64px" bg={theme.colors.primary} mb="10px" color="background">
        {theme.colors.primary}
      </Box>

      Background
      <Box width="64px" height="64px" bg={theme.colors.background} mb="10px">{theme.colors.background}</Box>

      Text
      <Box width="64px" height="64px" bg={theme.colors.text} mb="10px" color="background">{theme.colors.text}</Box>

      Gray
      <Box display="flex">
        {Object.values(theme.colors.gray).map(c =>
          <Box key={c} width="64px" height="64px" bg={c} color="background">{c}</Box>
        )}
      </Box>
    </Box>
  );
};
