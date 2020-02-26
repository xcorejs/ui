import styled from 'styled-components';

import { boxBase, BoxBaseProps } from '../bases';
import { compose } from '../utils/baseStyle';

export type TLen = string | 0 | number;

export type BoxProps = BoxBaseProps;

const Box = styled.div<BoxProps>`
  ${compose(boxBase)}
`;

export default Box;
