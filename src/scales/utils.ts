export type Scale<TValue, TKey extends string = string> = TValue[] & Record<TKey, TValue> & { aliases: TKey[] };

export const scale = <TValue, TKey extends string = string>(values: TValue[], aliases: TKey[]): Scale<TValue, TKey> => {
  const s = aliases.reduce((acc, val, i) => {
    // @ts-ignore
    acc[val] = values[i];
    return acc;
  }, [...values] as Scale<TValue, TKey>);

  s.aliases = aliases;

  return s;
};

export const defaultsScale = <TTarget, TSource>(target: TTarget, ...sources: TSource[]) =>
  sources.reduce((acc, source) => defaultsScalePair(acc, source), target);

const defaultsScalePair = <TTarget, TSource>(t: TTarget, s: TSource) => Object.keys(s).reduce((acc, k) => ({
  ...acc,
  [k]: typeof acc[k] === 'object' && !Array.isArray(t)
    ? { ...s[k], ...acc[k] }
    : acc[k] ?? s[k]
}), t as TTarget & TSource);
