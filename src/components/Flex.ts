import styled from 'styled-components';
import * as system from 'styled-system';

import Box, { BoxProps } from './Box';

export type FlexProps =
  & system.FlexboxProps
  & BoxProps
;

export type ExtendedFlexProps = FlexProps;

const Flex = styled(Box)<FlexProps>`
  ${system.flexbox}
`;

Flex.defaultProps = {
  display: 'flex'
};

Flex.displayName = 'Flex';

export default Flex;
