import 'jest-styled-components';

import { AspectRatio } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('AspectRatio component', () => {
  const component = renderer.create(
    <>
      <AspectRatio ratio={9 / 16}>
        16:9
      </AspectRatio>
      <AspectRatio ratio={3 / 4}>
        4:3
      </AspectRatio>
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
