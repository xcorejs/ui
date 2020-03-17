import React, { FC, ImgHTMLAttributes } from 'react';
import { BoxProps } from './Box';
import { ResponsiveValue, system } from 'styled-system';
import * as CSS from 'csstype';
import styled from 'styled-components';
import { compose } from '../utils/baseStyle';
import { boxBase } from '../bases';

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
  ${compose(boxBase)}

  ${system({
    objectFit: true
  })}
`;
