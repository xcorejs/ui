import 'jest-styled-components';

import { Spinner } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('Spinner component', () => {
  const component = renderer.create(
    <>
      <Spinner />
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
