import { composedBoxBase } from 'bases';
import { BoxProps } from 'components/Box';
import * as CSS from 'csstype';
import React, { FC, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, system } from '@styled-system/core';
import { shouldForwardProp } from 'utils/withConfig';

export type ImgProps =
  {
    objectFit?: ResponsiveValue<CSS.ObjectFitProperty>;
  }
  & Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'>
  & BoxProps;

const Img: FC<ImgProps> = ({ ...props }) =>
  <ImgStyle as={'img' as any} {...props} />
;

export default Img;

const imgSystem = system({ objectFit: true });

const ImgStyle = styled.div.withConfig<ImgProps>({ shouldForwardProp })`
  ${composedBoxBase}
  ${imgSystem}
`;
