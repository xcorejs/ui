import { ButtonProps } from './index';
import { defaultsDeep } from 'lodash';
import { darken } from 'polished';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonType = 'solid' | 'clear' | 'outline' | 'link';
export type ButtonAs = 'button' | 'div' | 'a';

interface ButtonValue {
  default: ButtonProps;
  sizes: Record<ButtonSize, ButtonProps>;
  types: Record<ButtonType, ButtonProps>;
}

export interface ButtonTheme {
  button: ButtonValue;
}

export const button = (
  b: {
    default?: ButtonProps;
    sizes?: Partial<Record<ButtonSize, ButtonProps>>;
    types?: Partial<Record<ButtonType, ButtonProps>>;
  } = emptyButton
): ButtonTheme => ({ button: defaultsDeep(b, emptyButton) });

const emptyButton: ButtonValue = {
  default: {
    fontWeight: 500,
    fontFamily: 'rubik',
    fontSize: '1.4rem',
    lineHeight: '2.4rem',
    borderRadius: '0.3rem'
  },
  sizes: {
    xs: {
      py: 0,
      px: '0.8rem',
      fontSize: '1.2rem',
      lineHeight: '1.8rem'
    },
    sm: {
      px: '1.2rem',
      py: '0.3rem',
      fontSize: '1.3rem'
    },
    md: {
      px: '2rem',
      py: '0.7rem',
      fontSize: '1.4rem'
    },
    lg: {
      px: '3rem',
      py: '1.2rem',
      fontSize: '1.6rem'
    }
  },
  types: {
    solid: {
      bg: '#0171b6',
      color: 'white',
      _hover: {
        bg: darken(0.025, '#0171b6')
      },
      _active: {
        bg: darken(0.05, '#0171b6')
      },
      _focus: {
        bg: darken(0.05, '#0171b6'),
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        opacity: 0.5
      }
    },
    clear: {
      color: '#0171b6',
      _hover: {
        bg: 'rgba(1, 113, 182, 0.1)'
      },
      _active: {
        bg: 'rgba(1, 113, 182, 0.2)'
      },
      _focus: {
        bg: 'rgba(1, 113, 182, 0.2)',
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        opacity: 0.5
      }
    },
    outline: {
      border: '1px solid #0171B6',
      color: '#0171b6',
      _hover: {
        bg: 'rgba(1, 113, 182, 0.1)'
      },
      _active: {
        bg: 'rgba(1, 113, 182, 0.2)'
      },
      _focus: {
        bg: 'rgba(1, 113, 182, 0.2)',
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        opacity: 0.5
      }
    },
    link: {
      padding: 0,
      color: '#0171b6',
      borderRadius: 0,
      border: 0,
      borderBottom: '1px solid transparent',
      _hover: {
        borderBottom: '1px solid #0171b6'
      },
      _active: {
        color: '#036199'
      },
      _focus: {
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        opacity: 0.5
      }
    }
  }
};
