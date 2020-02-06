import { FlexProps } from '../Flex';

export interface ContainerTheme {
  container: FlexProps;
}

const emptyContainer: FlexProps = {};

export const container = (c: FlexProps = emptyContainer): ContainerTheme => ({ container: c });
