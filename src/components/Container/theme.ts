import { FlexProps } from '../Flex';

export interface ContainerTheme {
  container: FlexProps;
}

const emptyContainer: FlexProps = {};

export const container = (container: FlexProps = emptyContainer): ContainerTheme => ({ container });
