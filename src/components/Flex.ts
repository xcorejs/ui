import Box, { BoxProps } from 'components/Box';
import styled from 'styled-components';
import * as system from 'styled-system';

export type FlexProps =
  & system.FlexboxProps
  & BoxProps
;

export const Flex = styled(Box)<FlexProps>`
  ${system.flexbox}
`;

Flex.defaultProps = {
  display: 'flex'
};

Flex.displayName = 'Flex';

export default Flex;
