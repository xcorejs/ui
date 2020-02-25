import styled, { css } from 'styled-components';
import * as system from 'styled-system';

import { BoxProps, boxBase } from './Box';

export type FlexProps =
  & system.FlexboxProps
  & BoxProps
;

export type ExtendedFlexProps = FlexProps;

const Flex = styled.div<FlexProps>`
  ${p => flexBase(p)}
`;

export const flexBase = (p: FlexProps) => css`
  ${boxBase(p)}
  ${system.display({ display: p.display ?? 'flex' })}
  ${system.flexbox(p)}
`;

Flex.displayName = 'Flex';

export default Flex;
