import React, { FC } from 'react';

import { Card, CardProps, Flex, Img, LoremIpsum, Paragraph, Tag, XcoreProvider, XcoreGlobal } from '../../src';

export default { title: 'Card' };

export const BasicUsage: FC = () => {
  const cardStyle: CardProps = {
    width: '400px',
    my: '1rem'
  };

  return (
    <XcoreProvider>
      <Flex justifyContent="space-around" flexWrap="wrap">
        <Card
          {...cardStyle}
          title="Card title"
          media={<Img src="http://placekitten.com/500/300" alt="cat" />}
          footer={<Paragraph>Footer</Paragraph>}
        >
          <LoremIpsum units="sentences" />
        </Card>

        <Card
          {...cardStyle}
          title="Card title"
          media={<Img src="http://placekitten.com/500/300" alt="cat" />}
          body={<LoremIpsum units="sentences" />}
          footer={<Paragraph>Footer</Paragraph>}
        />

        <Card
          {...cardStyle}
          title="Card title"
          tag="Tag"
          media={<Img src="http://placekitten.com/500/300" alt="cat" />}
          body={<LoremIpsum units="sentences" />}
        />

        <Card
          {...cardStyle}
          title="Card title"
          tag="Tag"
          media={<Img src="http://placekitten.com/500/300" alt="cat" />}
          body={<LoremIpsum units="sentences" />}
        />

        <Card
          {...cardStyle}
          tag="Tag"
          media={<Img src="http://placekitten.com/500/300" alt="cat" />}
          body={<LoremIpsum units="sentences" />}
        />

        <Card
          {...cardStyle}
          innerPadding="5rem"
          title="Thick"
          tag="Tag"
          media={<Img src="http://placekitten.com/500/300" alt="cat" />}
          body={<LoremIpsum units="sentences" />}
        />
      </Flex>
    </XcoreProvider>
  );
};
