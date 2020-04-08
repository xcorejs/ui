import React, { FC } from 'react';

import { Box, SimpleGrid, Text, XcoreProvider, Cell } from '../../src';

export default { title: 'Simple grid' };

export const Basic: FC = () => {
  return (
    <XcoreProvider>
      <Text>
        <SimpleGrid display="inline-grid" columns={2} gap="6rem 2rem" mt="3rem" justifyItems="center">
          <Box>Products</Box>
          <Box>Company</Box>
          <Box>Sitemap</Box>
          <Box>Contacts</Box>
          <Box>Disclaimer</Box>
          <Box>Privacy</Box>
        </SimpleGrid>
      </Text>
    </XcoreProvider>

  );
};

export const IE11: FC = () => {
  return (
    <SimpleGrid columns={{ _: 1, sm: 12 }} gap="3rem" mb={{ _: '3rem', sm: '8rem' }}>
      <Cell column={{ sm: '1/6' }}>
        AAAAAA
      </Cell>
      <Cell column={{ sm: '6/13' }}>
        BBBBBB
      </Cell>
    </SimpleGrid>
  );
};
