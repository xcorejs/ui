import { ModalProps } from '.';
import { defaultsTheme } from '../../utils/defaults';

export type ModalSize = 'sm' | 'md' | 'lg' | 'full';

export interface ModalValue {
  default: ModalProps;
  sizes: Record<ModalSize, ModalProps>;
}

export interface ModalTheme {
  modal: ModalValue;
}

export const modal = (m: {

} = emptyModal): ModalTheme => ({ modal: defaultsTheme<'sizes', ModalProps>(m, emptyModal) });

const emptyModal: ModalValue = {
  default: {
    _overlay: {
      background: 'rgba(15, 31, 40, 0.5)'
    },
    _header: {
      fontSize: '2rem',
      lineHeight: '3rem',
      fontFamily: 'rubik'
    },
    _close: {
      position: 'absolute',
      top: '1rem',
      right: '1rem'
    },
    bg: '#fff',
    borderRadius: '0.3rem',
    padding: '3rem',
    overflow: 'scroll',
    maxHeight: '100%'
  },
  sizes: {
    sm: {
      maxWidth: '41rem'
    },
    md: {
      maxWidth: '63rem'
    },
    lg: {
      maxWidth: '85rem'
    },
    full: {
      maxWidth: 'none'
    }
  }
};
