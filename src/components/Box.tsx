import { boxBase, BoxBaseProps } from 'bases';
import styled from 'styled-components';
import { compose } from 'utils/baseStyle';
import { shouldForwardProp } from 'utils/withConfig';

export type TLen = string | 0 | number;

export type BoxProps = BoxBaseProps;

const Box = styled.div.withConfig<BoxProps>({ shouldForwardProp })`
  ${compose(boxBase)}
`;

export default Box;
