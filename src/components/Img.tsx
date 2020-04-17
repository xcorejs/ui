import { composedBoxBase } from 'bases';
import { BoxProps } from 'components/Box';
import * as CSS from 'csstype';
import React, { FC, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, system } from '@styled-system/core';

export type ImgProps =
  {
    src: string;
    alt: string;
    objectFit?: ResponsiveValue<CSS.ObjectFitProperty>;
  }
  & ImgHTMLAttributes<HTMLImageElement>
  & BoxProps;

const Img: FC<ImgProps> = ({ ...props }) =>
  <ImgStyle {...props} />
;

export default Img;

const ImgStyle = styled.img<ImgProps>`
  ${composedBoxBase}

  ${system({
    objectFit: true
  })}
`;
