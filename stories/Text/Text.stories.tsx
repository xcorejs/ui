import React, { FC } from 'react';

import { Box, createTheme, Link, Text, text, XcoreProvider, Strikethrough, Em } from '../../src';

export default { title: 'Text' };

export const BasicUsage: FC = () => {
  return (
    <Box>
      <Text>
        <Box>
          <Text v="strong">
            Number 15:
            {' '}
            <Text v="em">Burger king foot lettuce. </Text>
          </Text>
          The last thing you'd want in your <Link href="/">Burger King burger</Link> is someone's foot fungus. But as
          it turns out, that might be what you get. A
          <Strikethrough>
            4channer
          </Strikethrough>
          uploaded a photo anonymously to the site showcasing his feet in a plastic bin of lettuce. With the statement:
          <Em>"This is the lettuce you eat at Burger King." </Em>
          Admittedly, he had shoes on.
        </Box>

        <Box>But that's even worse.</Box>
      </Text>

    </Box>
  );
};

const theme = createTheme({
  ...text({
    default: {
      fontFamily: 'Impact'
    }
  })
});

export const WithTheme: FC = () => {
  return (
    <XcoreProvider theme={theme}>
      <BasicUsage />
    </XcoreProvider>
  );
};
