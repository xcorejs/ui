import { useMemo } from 'react';
import { merge } from './merge';

const useMerge = <T>(target: T, ...sources: T[]): Required<T> =>
  useMemo(() => merge(target, ...sources), [target, ...sources]);

export default useMerge;
