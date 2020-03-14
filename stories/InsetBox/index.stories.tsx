import React, { FC, useRef } from 'react';

import { InsetBox, LoremIpsum, Paragraph, Box } from '../../src';

export default { title: 'Inset box' };

export const BasicUsage: FC = () => {
  return (
    <>
      <Paragraph>
        <LoremIpsum />
      </Paragraph>
      <Paragraph>
        <LoremIpsum />
      </Paragraph>
      <Paragraph>
        <LoremIpsum />
      </Paragraph>
      <Paragraph>
        <LoremIpsum />
      </Paragraph>

      <InsetBox v="top" h="left">
        AAAAA
      </InsetBox>
      <InsetBox v="top" h="center">
        AAAAA
      </InsetBox>
      <InsetBox v="top" h="right">
        AAAAA
      </InsetBox>
      <InsetBox v="center" h="left">
        AAAAA
      </InsetBox>
      <InsetBox v="center" h="center">
        AAAAA
      </InsetBox>
      <InsetBox v="center" h="right">
        AAAAA
      </InsetBox>
      <InsetBox v="bottom" h="left">
        AAAAA
      </InsetBox>
      <InsetBox v="bottom" h="center">
        AAAAA
      </InsetBox>
      <InsetBox v="bottom" h="right">
        AAAAA
      </InsetBox>
    </>
  );
};

export const Stretch: FC = () => {
  return (
    <>
      <InsetBox v="stretch" h="stretch" bg="grey" />
      <InsetBox v="stretch" h="left" bg="crimson" color="white">
        AAAAA
      </InsetBox>
      <InsetBox v="top" h="stretch" bg="navy" color="white">
        AAAAA
      </InsetBox>
    </>
  );
};

export const WithTarget: FC = () => {
  const box = useRef<HTMLDivElement>(null!);

  return (
    <>
      <Box bg="crimson" m="50px" ref={box}>
        <LoremIpsum />
      </Box>
      <InsetBox target={box} v="bottom" h="right">
        AAAAA
      </InsetBox>
    </>
  );
};
