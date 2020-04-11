import 'jest-styled-components';

import { XcoreProvider } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('XcoreProvider component', () => {
  const component = renderer.create(
    <XcoreProvider />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
