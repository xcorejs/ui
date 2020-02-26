import { loremIpsum } from 'lorem-ipsum';
import React, { FC, useMemo } from 'react';

import Text, { TextProps } from './Text';

export type LoremIpsumProps = {
  count?: number;
  units?: 'paragraphs' | 'words' | 'sentences';
} & TextProps;

const LoremIpsum: FC<LoremIpsumProps> = ({ count, units, ...props }) => {
  const text = useMemo(() =>
    loremIpsum({ count, units: units ?? 'paragraphs' }),
  [count, units]);

  return (
    <Text {...props}>{text}</Text>
  );
};

export default LoremIpsum;
