import 'jest-styled-components';

import { Button } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('Button component', () => {
  const component = renderer.create(
    <>
      <Button>Button</Button>
      <Button bg="navy">Button</Button>
      <Button v="outline">Button</Button>
      <Button s="lg">Button</Button>
      <Button s="lg" v="outline">Button</Button>
      <Button as="a" href="example.com">Link</Button>
      <Button disabled>Disabled</Button>
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
