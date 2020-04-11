import 'jest-styled-components';

import { CloseControl } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('CloseControl component', () => {
  const component = renderer.create(
    <>
      <CloseControl />
      <CloseControl s="xs" />
      <CloseControl s="sm" />
      <CloseControl s="md" />
      <CloseControl s="lg" />
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
