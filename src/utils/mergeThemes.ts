import { merge } from './merge';

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

export const mergeThemes = <
  TKey extends string,
  TValue extends {},
>(
  target: PartialThemeItem<TKey, TValue> | undefined,
  source: ThemeItem<TKey, TValue>
): ThemeItem<TKey, TValue> =>
  target ? mergeThemePair(target, source) : source;

const mergeThemePair = <
  TKey extends string,
  TValue extends {},
>(
  target: PartialThemeItem<TKey, TValue>,
  source: ThemeItem<TKey, TValue>
): ThemeItem<TKey, TValue> => {
  const next: Record<string, TValue> = {
    ...target,
    default: target.default
      ? merge(target.default, source.default) as any
      : source.default
  };

  Object.keys(source).forEach(
    k => k !== 'default' && (next[k] = mergeVariantPair((target as any)[k], source[k]))
  );

  return next as ThemeItem<TKey, TValue>;
};

const mergeVariantPair = <
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
        ? merge(target[k as keyof TTarget]!, source[k] as any)
        : source[k];
    }
  );

  return next as any;
};
