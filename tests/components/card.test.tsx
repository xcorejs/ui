import 'jest-styled-components';

import { Card, Img, LoremIpsum, Paragraph } from '@xcorejs/ui';
import React from 'react';
import renderer from 'react-test-renderer';

test('Card component', () => {
  const component = renderer.create(
    <>
      <Card
        title="Card title"
        media={<Img src="http://placekitten.com/500/300" alt="cat" />}
        footer={<Paragraph>Footer</Paragraph>}
      >
        <LoremIpsum units="sentences" />
      </Card>

      <Card
        title="Card title"
        media={<Img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum units="sentences" />}
        footer={<Paragraph>Footer</Paragraph>}
      />

      <Card
        title="Card title"
        tag="Tag"
        media={<Img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum units="sentences" />}
      />

      <Card
        title="Card title"
        tag="Tag"
        media={<Img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum units="sentences" />}
      />

      <Card
        tag="Tag"
        media={<Img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum units="sentences" />}
      />

      <Card
        innerPadding="5rem"
        title="Thick"
        tag="Tag"
        media={<Img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum units="sentences" />}
      />
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
