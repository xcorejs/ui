import { ButtonProps } from '.';
import { defaultsTheme } from '../../utils/defaults';
import { darken, opacify } from '../../scales/colors';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
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
): ButtonTheme => ({ button: defaultsTheme<'types' | 'sizes', ButtonProps>(b, emptyButton) });

const emptyButton: ButtonValue = {
  default: {
    fontWeight: 500,
    fontFamily: 'text',
    fontSize: '1.4rem',
    lineHeight: '2.4rem',
    borderRadius: '0.3rem',

    display: 'inline-flex',
    bg: 'transparent',
    border: '0.1rem solid transparent',
    transition: 'background 300ms, color 300ms, border 300ms, box-shadow 300ms',
    cursor: 'pointer',
    textDecoration: 'none',
    alignItems: 'center',
    _disabled: {
      cursor: 'not-allowed'
    }
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
      bg: 'primary',
      color: 'background',
      _hover: {
        bg: darken('primary', 0.025)
      },
      _active: {
        bg: darken('primary', 0.05)
      },
      _focus: {
        bg: darken('primary', 0.05),
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        opacity: 0.5
      }
    },
    clear: {
      color: 'primary',
      _hover: {
        bg: opacify('#0171b6', 0.1)
      },
      _active: {
        bg: opacify('#0171b6', 0.2)
      },
      _focus: {
        bg: opacify('#0171b6', 0.2),
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        opacity: 0.5
      }
    },
    outline: {
      border: '1px solid',
      borderColor: 'primary',
      color: 'primary',
      _hover: {
        bg: opacify('#0171b6', 0.1)
      },
      _active: {
        bg: opacify('#0171b6', 0.2)
      },
      _focus: {
        bg: opacify('#0171b6', 0.2),
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        opacity: 0.5
      }
    },
    link: {
      padding: 0,
      color: 'primary',
      borderRadius: 0,
      border: 0,
      borderBottom: '1px solid transparent',
      _hover: {
        borderBottom: '1px solid',
        borderColor: 'primary'
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
