import { CloseControlProps } from '.';
import { defaultsTheme } from '../../utils/defaults';

export type CloseControlSizes = 'xs' | 'sm' | 'md' | 'lg';

interface CloseControlValue {
  default: CloseControlProps;
  sizes: Record<CloseControlSizes, CloseControlProps>;
}

export interface CloseControlTheme {
  closeControl: CloseControlValue;
}

export const closeControl = (c: {
  default: Partial<CloseControlProps>;
  sizes?: Partial<Record<CloseControlSizes, CloseControlProps>>;
} = emptyCloseControl): CloseControlTheme =>
  ({ closeControl: defaultsTheme<'sizes', CloseControlProps>(c, emptyCloseControl) });

const emptyCloseControl: CloseControlValue = {
  default: {
    cursor: 'pointer',
    _icon: {
      fill: '#455663',
      fillHover: '#1e1e1e'
    }
  },
  sizes: {
    xs: {
      width: '1.2rem',
      height: '1.2rem',
      _icon: {
        width: '0.6rem',
        height: '0.6rem'
      }
    },
    sm: {
      width: '1.6rem',
      height: '1.6rem',
      _icon: {
        width: '0.8rem',
        height: '0.8rem'
      }
    },
    md: {
      width: '2.4rem',
      height: '2.4rem',
      _icon: {
        width: '1.2rem',
        height: '1.2rem'
      }
    },
    lg: {
      width: '3.2rem',
      height: '3.2rem',
      _icon: {
        width: '1.6rem',
        height: '1.6rem'
      }
    }
  }
};
