import React, { FC, ImgHTMLAttributes } from 'react';
import Box, { BoxProps } from './Box';

export type ImgProps =
  {
    src: string;
    alt: string;
  }
  & ImgHTMLAttributes<HTMLImageElement>
  & BoxProps;

const Img: FC<ImgProps> = ({ ...props }) =>
  <Box as="img" {...props} />
;

export default Img;
