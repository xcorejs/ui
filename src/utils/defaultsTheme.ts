import { defaultsPair } from './defaults';

type ThemeItem<TKey extends keyof any, TValue extends {}> = {
  [P in Exclude<TKey, 'default'>]: Record<string, TValue>;
} & {
  default: TValue;
};

type PartialThemeItem<TKey extends keyof any, TValue extends {}> = {
  [P in Exclude<TKey, 'default'>]?: Partial<Record<string, Partial<TValue>>> | undefined;
} & {
  default?: Partial<TValue>;
};

export const defaultsTheme = <
  TKey extends string,
  TValue extends {},
>(
  target: PartialThemeItem<TKey, TValue> | undefined,
  source: ThemeItem<TKey, TValue>
): ThemeItem<TKey, TValue> =>
  target ? defaultsThemePair(target, source) : source;

export const defaultsThemePair = <
  TKey extends string,
  TValue extends {},
>(
  target: PartialThemeItem<TKey, TValue>,
  source: ThemeItem<TKey, TValue>
): ThemeItem<TKey, TValue> => {
  const next: Record<string, TValue> = {
    ...target,
    default: target.default
      ? defaultsPair(target.default, source.default)
      : source.default
  };

  Object.keys(source).forEach(
    k => k !== 'default' && (next[k] = defaultsVariantPair((target as any)[k], source[k]))
  );

  return next as ThemeItem<TKey, TValue>;
};

const defaultsVariantPair = <
  TTarget extends Record<string, {} | undefined>,
  TSource extends Record<string, {}>
>(
  target: TTarget,
  source: TSource
): TTarget & TSource => {
  const next = { ...target } as Record<string, any>;

  Object.keys(source).forEach(
    k => {
      next[k] = target && target[k as keyof TTarget]
        ? defaultsPair(target[k as keyof TTarget]!, source[k])
        : source[k];
    }
  );

  return next as any;
};
