import { CardProps } from '.';
import { defaultsTheme } from '../../utils/defaults';

export type CardVariant = 'normal' | 'elevated' | 'outline';

interface CardValue {
  default: CardProps;
  variants: Record<CardVariant, CardProps>;
}

export interface CardTheme {
  card: CardValue;
}

export const card = (
  c?: {
    default?: CardProps;
    variants?: Partial<Record<CardVariant, CardProps>>;
  }
): CardTheme => ({
  card: defaultsTheme<'variants', CardProps>(c, emptyCard)
});

const emptyCard: CardValue = {
  default: {
    color: 'text',
    background: 'background',
    maxWidth: '30rem',
    _header: { padding: '1rem' },
    _body: { padding: '1rem' },
    _footer: { padding: '1rem' }
  },
  variants: {
    normal: {},
    elevated: {
      borderRadius: '0.3rem',
      boxShadow: '0 0.3rem 0.8rem 0 rgba(36, 49, 70, 0.25)'
    },
    outline: {
      border: '1px solid rgba(69, 86, 99, 0.5)'
    }
  }
};
