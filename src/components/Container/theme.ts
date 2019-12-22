import { FlexProps } from 'components/Flex';

export interface ContainerTheme {
  container: FlexProps;
}

export const container = (container: FlexProps): ContainerTheme => ({ container });
