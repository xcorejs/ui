import { createTheme, darken, transparentize } from '@xcorejs/ui';
import { variant } from 'utils/variant';

const { button } = createTheme({});

test('variantThemed', () => {
  expect(
    variant(
      button.variants,
      'solid',
      'outline'
    )
  ).toEqual({
    border: '1px solid',
    borderColor: 'primary',
    color: 'primary',
    _hover: {
      bg: transparentize('primary', 0.9)
    },
    _active: {
      bg: transparentize('primary', 0.8)
    },
    _focus: {
      bg: transparentize('primary', 0.8),
      outline: '2px solid rgba(15, 31, 40, 0.2)',
      outlineOffset: '-2px'
    },
    _disabled: {
      opacity: 0.5
    }
  });

  expect(
    variant(
      button.variants,
      'solid'
    )
  ).toEqual({
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
  });
});
