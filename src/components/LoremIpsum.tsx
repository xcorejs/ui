import Text, { TextProps } from 'components/Text';
import { loremIpsum } from 'lorem-ipsum';
import React, { forwardRef, useMemo } from 'react';

export type LoremIpsumProps = {
  count?: number;
  units?: 'paragraphs' | 'words' | 'sentences';
  random?: boolean;
} & TextProps;

const pseudoRandomGenerator = () => {
  let acc = 0.5;
  return () => {
    acc = acc * 1.6564534 % 1;
    return acc;
  };
};

const LoremIpsum = forwardRef<HTMLSpanElement, LoremIpsumProps>(
  ({ count, units, random, ...props }, ref) => {
    const pseudoRandom = useMemo(() => pseudoRandomGenerator(), []);
    const text = useMemo(() =>
      loremIpsum({
        count,
        units: units ?? 'paragraphs',
        random: random ? Math.random : pseudoRandom
      }),
    [count, units]);

    return (
      <Text {...props} ref={ref}>{text}</Text>
    );
  }
);

export default LoremIpsum;
