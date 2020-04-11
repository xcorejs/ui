import 'jest-styled-components';

import { Box, SimpleGrid, Cell } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('SimpleGrid component', () => {
  const component = renderer.create(
    <>
      <SimpleGrid display="inline-grid" columns={2} gap="6rem 2rem" mt="3rem" justifyItems="center">
        <Box>Products</Box>
        <Box>Company</Box>
        <Box>Sitemap</Box>
        <Box>Contacts</Box>
        <Box>Disclaimer</Box>
        <Box>Privacy</Box>
      </SimpleGrid>
      <SimpleGrid columns={{ _: 12, sm: 12 }} gap="3rem">
        <Cell gridColumn={{ sm: '1/8' }}>
          AAAAAAA
        </Cell>

        <Cell column={{ sm: '9/13' }} display={{ _: 'none', sm: 'block' }}>
          BBBB
        </Cell>
      </SimpleGrid>
      <SimpleGrid columns={{ _: 1, sm: 12 }} gap="3rem" mb={{ _: '3rem', sm: '8rem' }}>
        <Cell column={{ sm: '1/6' }}>
          AAAAAA
        </Cell>
        <Cell column={{ sm: '6/13' }}>
          BBBBBB
        </Cell>
      </SimpleGrid>
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
