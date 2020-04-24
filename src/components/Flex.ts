import { FlexBaseProps, composedFlexBase } from 'bases';
import styled from 'styled-components';

export type FlexProps = FlexBaseProps;
export type ExtendedFlexProps = FlexProps;

const Flex = styled.div<FlexProps>`
  ${composedFlexBase}
`;
Flex.displayName = 'Flex';

export default Flex;
