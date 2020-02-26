import styled from 'styled-components';

import { flexBase, FlexBaseProps } from '../bases';
import { compose } from '../utils/baseStyle';

export type FlexProps = FlexBaseProps;
export type ExtendedFlexProps = FlexProps;

const Flex = styled.div<FlexProps>`
  ${compose(flexBase)}
`;
Flex.displayName = 'Flex';

export default Flex;
