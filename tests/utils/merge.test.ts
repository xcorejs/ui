import { CardProps } from '@xcorejs/ui';
import { merge } from 'utils/merge';
import { createTheme } from '../../src/theme';

test('deeply merge props', () => {
  expect(merge<CardProps>({
    _header: {
      padding: { _: 1, sm: 2, md: 3 }
    },
    color: 'green',
    margin: [10, 20, 30]
  })).toEqual({
    _header: {
      padding: { _: 1, sm: 2, md: 3 }
    },
    color: 'green',
    margin: [10, 20, 30]
  });

  expect(
    merge<CardProps>({
      _header: {
        padding: { xl: 5 },
        fontSize: '2rem'
      },
      color: 'red',
      margin: [0, 20, 30, 40]
    }, {
      _header: {
        padding: { _: 1, sm: 2, md: 3 },
        color: 'crimson'
      },
      color: 'green',
      margin: [10, 20, 30]
    })
  ).toEqual({
    _header: {
      padding: { xl: 5 },
      fontSize: '2rem',
      color: 'crimson'
    },
    color: 'red',
    margin: [0, 20, 30, 40]
  });
});

test('merged props key order', () => {
  expect(
    Object.keys(merge<CardProps>({
      my: '30'
    }, {
      margin: [10, 20, 30],
      marginTop: '30'
    }))
  ).toEqual(
    ['margin', 'marginTop', 'my']
  );

  expect(
    Object.keys(merge<CardProps>({
      my: '30',
      padding: 20
    }, {
      margin: [10, 20, 30],
      marginTop: '30',
      padding: 20,
      paddingTop: 5
    }))
  ).toEqual(
    ['margin', 'marginTop', 'paddingTop', 'my', 'padding']
  );
});

test('merge button props', () => {
  const { button } = createTheme();

  const props = merge(
    {
      color: 'blue'
    },
    button.variants.solid,
    button.sizes.md,
    button.default
  );

  expect(props)
    .toEqual({
      _hover: {
        bg: '__$darken;primary;0.025'
      },
      _active: {
        bg: '__$darken;primary;0.05'
      },
      _focus: {
        bg: '__$darken;primary;0.05',
        outline: '2px solid rgba(15, 31, 40, 0.2)',
        outlineOffset: '-2px'
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.5
      },
      fontWeight: 500,
      fontFamily: 'text',
      lineHeight: '2.4rem',
      borderRadius: '0.3rem',
      display: 'inline-flex',
      border: '0.1rem solid transparent',
      transition: 'background 300ms, color 300ms, border 300ms, box-shadow 300ms',
      cursor: 'pointer',
      textDecoration: 'none',
      alignItems: 'center',
      px: '2rem',
      py: '0.7rem',
      fontSize: '1.4rem',
      bg: 'primary',
      color: 'blue'
    });

  expect(Object.keys(props))
    .toEqual([
      'fontWeight',
      'fontFamily',
      'lineHeight',
      'borderRadius',
      'display',
      'border',
      'transition',
      'cursor',
      'textDecoration',
      'alignItems',
      'px',
      'py',
      'fontSize',
      'bg',
      '_hover',
      '_active',
      '_focus',
      '_disabled',
      'color'
    ]);
});
