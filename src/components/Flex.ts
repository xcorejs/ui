import { FlexBaseProps, composedFlexBase } from 'bases';
import styled from 'styled-components';
import { shouldForwardProp } from 'utils/withConfig';

export type FlexProps = FlexBaseProps;
export type ExtendedFlexProps = FlexProps;

const Flex = styled.div.withConfig<FlexProps>({ shouldForwardProp })`
  ${composedFlexBase}
`;
Flex.displayName = 'Flex';

export default Flex;
