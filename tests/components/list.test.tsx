import 'jest-styled-components';

import { Link } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('List component', () => {
  const component = renderer.create(
    <>
      <Link href="/">Burger King burger</Link>
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
