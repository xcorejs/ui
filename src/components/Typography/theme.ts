import { defaultsTheme } from '../../utils/defaults';
import { TextProps } from '../Text';

interface TypographyValue {
  default: TextProps;
  types: Record<TypographyType, TextProps>;
}

export type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'lead';

export type TypographyAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';

export interface TypographyTheme {
  typography: TypographyValue;
}

const emptyTypography: TypographyValue = {
  default: {
    fontFamily: 'rubik',
    margin: 0
  },
  types: {
    p: {
      fontSize: '1.6rem',
      lineHeight: '2rem'
    },
    h1: {
      fontSize: '4.4rem',
      fontWeight: 500,
      lineHeight: '6.6rem',
      color: '#1E3441'
    },
    h2: {
      fontSize: '3.2rem',
      fontWeight: 500,
      lineHeight: '4.8rem'
    },
    h3: {
      fontSize: '2.4rem',
      fontWeight: 500,
      lineHeight: '3.6rem'
    },
    h4: {

    },
    h5: {

    },
    h6: {

    },
    lead: {}
  }
};

export const typography = (t: {
  default?: TextProps;
  types?: Partial<Record<TypographyType, TextProps>>;
} = emptyTypography) => ({ typography: defaultsTheme<'types', TextProps>(t, emptyTypography) });
