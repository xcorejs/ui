import { ResponsiveValue } from '@styled-system/core';

export const isValueEmpty = <T>(value: ResponsiveValue<T>): boolean =>
  typeof value !== 'object'
    ? value === null || value === undefined
    : Array.isArray(value)
      ? value.length === 0
      : Object.keys(value as object).length === 0;
