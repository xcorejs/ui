import { FlexProps } from 'components/Flex';
import { mergeThemes } from 'utils/mergeThemes';

type ContainerValue = {
  default: FlexProps;
  variants: Record<ContainerVariant, FlexProps>;
};

export type ContainerVariant = 'normal' | 'fluid';

export interface ContainerTheme {
  container: ContainerValue;
}

export const container = (
  c?: {
    default?: FlexProps;
    variants?: Partial<Record<ContainerVariant, FlexProps>>;
  }
): ContainerTheme => ({ container: mergeThemes<'variants', FlexProps>(c, emptyContainer) });

const emptyContainer: ContainerValue = {
  default: {
    ml: 'auto',
    mr: 'auto'
  },
  variants: {
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
