
export const variant = <TKey extends string, TValue>(
  variants: Record<TKey, TValue>,
  def: TKey,
  ...aliases: (TKey | undefined)[]
) => aliases.reduce(
  (acc, val) => acc ?? variants[val!],
  undefined as undefined | TValue
) ?? variants[def];

export const typeVariant = <TKey extends string, TValue>(
  theme: { types: Record<TKey, TValue> },
  def: TKey,
  props: { t?: TKey; type?: TKey }
) =>
  variant(theme.types, def, props.t, props.type);

export const sizeVariant = <TKey extends string, TValue>(
  theme: { sizes: Record<TKey, TValue> },
  def: TKey,
  props: { s?: TKey; size?: TKey }
) =>
  variant(theme.sizes, def, props.s, props.size);
