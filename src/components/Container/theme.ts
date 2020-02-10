import { FlexProps } from '../Flex';

export interface ContainerTheme {
  container: FlexProps;
}

const emptyContainer: FlexProps = {
  width: ['100%', '76.8rem', '102.4rem', '120rem', '132rem']
};

export const container = (c: FlexProps = emptyContainer): ContainerTheme => ({ container: c });
