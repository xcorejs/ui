import { createTheme, darken, opacify } from '../../src';
import { variant } from '../../src/utils/variant';

const { button } = createTheme({});

test('variantThemed', () => {
  expect(
    variant(
      button.types,
      'solid',
      'outline'
    )
  ).toEqual({
    border: '1px solid',
    borderColor: 'primary',
    color: 'primary',
    _hover: {
      bg: opacify('primary', 0.1)
    },
    _active: {
      bg: opacify('primary', 0.2)
    },
    _focus: {
      bg: opacify('primary', 0.2),
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
