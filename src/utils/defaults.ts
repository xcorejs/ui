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

export const defaults = <TValue extends {}>(
  target: Partial<TValue>,
  ...source: (Partial<TValue> | undefined)[]
): TValue =>
  reverseObjectKeys(source.reduce<Partial<TValue>>((acc, val) => defaultsPair(acc, val), target) as TValue);

export const defaultsTheme = <
  TKey extends string,
  TValue extends {},
>(
  target: PartialThemeItem<TKey, TValue>,
  ...source: ThemeItem<TKey, TValue>[]
): ThemeItem<TKey, TValue> =>
  source.reduce<Partial<ThemeItem<TKey, TValue>>>(
    (acc, val) => defaultsThemePair(acc, val) as Partial<ThemeItem<TKey, TValue>>,
    target as Partial<ThemeItem<TKey, TValue>>
  ) as ThemeItem<TKey, TValue>;

const defaultsPair = <TValue extends {}>(
  target: Partial<TValue>,
  source: Partial<TValue> | undefined
): TValue => source
  ? Object.keys(source).reduce(
    (acc, k) => ({
      ...acc,
      [k]: typeof source[k] === 'object' && (k as string).startsWith('_')
        ? acc[k] ? defaults(acc[k]!, source[k]) : source[k]
        : (acc[k] as any) ?? source[k]
    }),
    target
  ) as TValue
  : target as TValue;

export const defaultsThemePair = <
  TKey extends string,
  TValue extends {},
>(
  target: PartialThemeItem<TKey, TValue>,
  source: ThemeItem<TKey, TValue>
): ThemeItem<TKey, TValue> => Object.keys(source).reduce(
  (acc, k) => k === 'default'
    ? acc
    : {
      ...acc,
      [k]: defaultsVariantPair(target[k], source[k])
    },
  {
    ...target,
    default: target.default
      ? defaultsPair(target.default, source.default)
      : source.default
  } as Partial<ThemeItem<TKey, TValue>>
) as ThemeItem<TKey, TValue>;

const defaultsVariantPair = <
  TTarget extends Partial<Record<string, {}>> | undefined,
  TSource extends Record<string, {}>
>(
  target: TTarget,
  source: TSource
) =>
  Object.keys(source).reduce<TTarget & TSource>(
    (acc, k) => ({
      ...acc,
      [k]: target && target![k as keyof TTarget]
        ? defaultsPair(target![k as keyof TTarget]!, source[k])
        : source[k]
    }),
    target as TTarget & TSource
  );

const reverseObjectKeys = <T>(obj: T): T =>
  Object.keys(obj).reverse().reduce(
    (acc, k) => ({ ...acc, [k]: obj[k] }),
    {} as T
  );
