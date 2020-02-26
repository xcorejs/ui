import { createTheme } from '../../src';
import { variant } from '../../src/utils/variant';
import { darken } from 'polished';

const { button } = createTheme({});

test('variantThemed', () => {
  expect(
    variant(
      button.types,
      'solid',
      'outline'
    )
  ).toEqual({
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
  });

  expect(
    variant(
      button.types,
      'solid'
    )
  ).toEqual({
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
  });
});
