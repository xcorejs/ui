import React, { FC } from 'react';

import { Card, Img, LoremIpsum, Stack, Box, Paragraph, Tag, Flex, CardProps } from '../../src';

export default { title: 'Card' };

export const BasicUsage: FC = () => {
  const cardStyle: CardProps = {
    width: '400px',
    my: '1rem'
  };

  return (
    <Flex justifyContent="space-around" flexWrap="wrap">
      <Card
        {...cardStyle}
        title="Card title"
        media={<Img src="http://placekitten.com/500/300" alt="cat" />}
        footer={<Paragraph>Footer</Paragraph>}
      >
        <LoremIpsum />
      </Card>

      <Card
        {...cardStyle}
        title="Card title"
        media={<Img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum />}
        footer={<Paragraph>Footer</Paragraph>}
      />

      <Card
        {...cardStyle}
        title="Card title"
        tag={<Tag>Tag</Tag>}
        media={<Img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum />}
      />

      <Card
        {...cardStyle}
        title="Card title"
        tag={<Tag>Tag</Tag>}
        media={<Img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum />}
      />
    </Flex>
  );
};
