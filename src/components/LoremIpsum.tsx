import Text, { TextProps } from 'components/Text';
import { loremIpsum } from 'lorem-ipsum';
import React, { forwardRef, useMemo } from 'react';

export type LoremIpsumProps = {
  count?: number;
  units?: 'paragraphs' | 'words' | 'sentences';
  random?: boolean;
} & TextProps;

const LoremIpsum = forwardRef<HTMLSpanElement, LoremIpsumProps>(
  ({ count, units, random, ...props }, ref) => {
    const text = useMemo(() =>
      loremIpsum({
        count,
        units: units ?? 'paragraphs',
        random: random ? Math.random : () => 0
      }),
    [count, units]);

    return (
      <Text {...props} ref={ref}>{text}</Text>
    );
  }
);

export default LoremIpsum;
