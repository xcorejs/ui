import { loremIpsum } from 'lorem-ipsum';
import React, { FC, useMemo, forwardRef } from 'react';

import Text, { TextProps } from './Text';

export type LoremIpsumProps = {
  count?: number;
  units?: 'paragraphs' | 'words' | 'sentences';
} & TextProps;

const LoremIpsum = forwardRef<HTMLSpanElement, LoremIpsumProps>(
  ({ count, units, ...props }, ref) => {
    const text = useMemo(() =>
      loremIpsum({ count, units: units ?? 'paragraphs' }),
    [count, units]);

    return (
      <Text {...props} ref={ref}>{text}</Text>
    );
  }
);

export default LoremIpsum;
