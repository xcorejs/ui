import { defaults, defaultsTheme } from '../../src/utils/defaults';
import { createTheme } from '../../src/theme';
import { darken } from 'polished';
import { ButtonProps } from '../../src/components/Button/index';

test('defaults', () => {
  expect(defaults<ButtonProps>(
    {
      color: 'blue'
    },
    {
      color: 'red',
      background: 'red',
      borderColor: 'red'
    },
    {
      color: 'green',
      borderColor: 'green',
      fontSize: '2rem'
    }
  )).toEqual({
    color: 'blue',
    background: 'red',
    borderColor: 'red',
    fontSize: '2rem'
  });
});

test('defaultsTheme', () => {
  expect(defaultsTheme<'types' | 'sizes', ButtonProps>(
    {
      default: {
        bg: 'crimson',
        color: 'white',
        p: '1rem',
        fontSize: '1rem'
      },
      sizes: {
        large: {
          padding: '3rem'
        }
      },
      types: {
        clear: {
          background: 'transparent',
          color: 'red',
          border: '1px solid crimson'
        }
      }
    },
    {
      default: {
        fontWeight: 500,
        fontFamily: 'rubik',
        fontSize: '1.4rem',
        lineHeight: '2.4rem',
        borderRadius: '0.3rem',
        _hover: {
          color: 'red',
          background: 'grey'
        }
      },
      sizes: {
        small: {
          py: 0,
          px: '0.8rem',
          fontSize: '1.2rem',
          lineHeight: '1.8rem'
        },
        large: {
          px: '1.2rem',
          py: '0.3rem',
          fontSize: '1.3rem'
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
        }
      }
    }
  )).toEqual({
    default: {
      bg: 'crimson',
      color: 'white',
      p: '1rem',
      fontSize: '1rem',
      fontWeight: 500,
      fontFamily: 'rubik',
      lineHeight: '2.4rem',
      borderRadius: '0.3rem',
      _hover: {
        color: 'red',
        background: 'grey'
      }
    },
    sizes: {
      small: {
        py: 0,
        px: '0.8rem',
        fontSize: '1.2rem',
        lineHeight: '1.8rem'
      },
      large: {
        padding: '3rem',
        px: '1.2rem',
        py: '0.3rem',
        fontSize: '1.3rem'
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
        background: 'transparent',
        color: 'red',
        border: '1px solid crimson',
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
      }
    }
  });
});
