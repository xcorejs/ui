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
  c: {
    default?: CardProps;
    variants?: Partial<Record<CardVariant, CardProps>>;
  } = emptyCard,
  innerPadding?: string
): CardTheme => ({
  card: !innerPadding
    ? defaultsTheme<'variants', CardProps>(c, emptyCard)
    : defaultsTheme<'variants', CardProps>(c, emptyCard, defaultPadding(innerPadding) as CardValue)
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

const defaultPadding = (padding: string): Partial<CardValue> => ({
  default: {
    _header: { padding },
    _body: { padding },
    _footer: { padding }
  }
});
