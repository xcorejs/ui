import { ContainerProps } from './index';
import { FlexProps } from '../Flex';
import { defaultsDeep } from 'lodash';

type ContainerValue =
  {
    types: Record<ContainerType, FlexProps>;
  }
  & ContainerProps;

export type ContainerType = 'normal' | 'fluid';

export interface ContainerTheme {
  container: ContainerValue;
}

const emptyContainer: ContainerValue = {
  types: {
    normal: {
      width: ['100%', '76.8rem', '102.4rem', '120rem', '132rem'],
      px: 3
    },
    fluid: {
      width: '100%',
      px: 3
    }
  }
};

export const container = (
  c: { types?: Partial<Record<ContainerType, FlexProps>> } = emptyContainer
): ContainerTheme => ({ container: defaultsDeep(c, emptyContainer) });
