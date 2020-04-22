import 'jest-styled-components';

import { Box, colors, createScales, createTheme, darkColorTheme, XcoreProvider } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('Scales - no theme', () => {
  const component = renderer.create(
    <XcoreProvider>
      <Box color="primary" />
    </XcoreProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Scales - light theme', () => {
  const lightTheme = createTheme();

  const component = renderer.create(
    <XcoreProvider theme={lightTheme}>
      <Box color="primary" />
    </XcoreProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Scales - dark theme', () => {
  const darkTheme = createTheme({
    ...createScales({
      ...colors(darkColorTheme)
    })
  });

  const component = renderer.create(
    <XcoreProvider theme={darkTheme}>
      <Box color="primary" />
    </XcoreProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
