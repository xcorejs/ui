import { defaultsTheme } from '../../utils/defaults';
import { FlexProps } from '../Flex';

type ContainerValue = {
  default: FlexProps;
  types: Record<ContainerType, FlexProps>;
};

export type ContainerType = 'normal' | 'fluid';

export interface ContainerTheme {
  container: ContainerValue;
}

const emptyContainer: ContainerValue = {
  default: {
    ml: 'auto',
    mr: 'auto'
  },
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
  c: {
    default?: FlexProps;
    types?: Partial<Record<ContainerType, FlexProps>>;
  } = emptyContainer
): ContainerTheme => ({ container: defaultsTheme<'types', FlexProps>(c, emptyContainer) });
