import 'jest-styled-components';

import { Box, Grid, LoremIpsum } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('Grid component', () => {
  const component = renderer.create(
    <>
      <Grid columns="repeat(3, 75px) auto" rows="200px auto 70px" gap="10px" p="10px" height="100%">
        <Box column="1 / span 3" row="1" placeSelf="center">Logo</Box>
        <Box column="1 / span 3" row="2">
          Menu
        </Box>
        <Box column="1 / span 2" row="3" alignSelf="center">
          User bar
        </Box>
        <Box column="3 / span 1" row="3" placeSelf="center">
          <img
            src="https://avatars0.githubusercontent.com/u/15893340?s=460&v=4"
            alt="avatar"
            style={{ width: '64px', height: '64px' }}
          />
        </Box>

        {/* Content */}
        <Box column="4 / span 1" row="1" placeSelf="center" >Header</Box>
        <Box column="4 / span 1" row="2">
          <Box>
            <LoremIpsum count={2} />
          </Box>
          <Box>
            <LoremIpsum count={2} />
          </Box>
        </Box>

        {/* Footer */}
        <Box column="4 / span 1" row="3" placeSelf="center">
          Footer
        </Box>
      </Grid>
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
