export const merge = <TValue extends {}>(
  target: Partial<TValue>,
  ...source: (Partial<TValue> | undefined)[]
): TValue =>
  source.reduce<Partial<TValue>>((acc, val) => mergePair(acc, val), target) as TValue;

export const mergePair = <T, U>(a: T, b: U): T & U => {
  const r = { ...a, ...b };

  Object.keys(r).forEach(
    k => typeof (a as T & U)[k] === 'object' && typeof (b as T & U)[k] === 'object' && k[0] === '_' &&
      (r[k] = mergePair((a as T & U)[k], (b as T & U)[k]))
  );

  return r;
};
