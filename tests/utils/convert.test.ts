import convert, { getArrayValue } from 'utils/convert';
import { breakpoints } from 'scales/breakpoints';

const {
  valueToArray,
  objToArray,
  toArray,
  narrow,
  getValue,
  transform
} = convert(breakpoints(['30em', '48em', '64em', '78em', '85em']).breakpoints);

test('convert value to array', () => {
  expect(valueToArray('3rem')).toEqual(['3rem', null, null, null, null, null]);
  expect(valueToArray('3rem', false)).toEqual(['3rem', '3rem', '3rem', '3rem', '3rem', '3rem']);
});

test('convert object to array', () => {
  expect(objToArray({ _: 'green', sm: 'blue', lg: 'red' })).toEqual([
    'green',
    null,
    'blue',
    null,
    'red',
    null
  ]);
  expect(objToArray({ _: 'green', sm: 'blue', lg: 'red' }, false)).toEqual([
    'green',
    'green',
    'blue',
    'blue',
    'red',
    'red'
  ]);
});

test('convert to array', () => {
  expect(toArray('3rem')).toEqual(['3rem', null, null, null, null, null]);
  expect(toArray('3rem', false)).toEqual(['3rem', '3rem', '3rem', '3rem', '3rem', '3rem']);

  expect(toArray({ _: 'green', sm: 'blue', lg: 'red' })).toEqual([
    'green',
    null,
    'blue',
    null,
    'red',
    null
  ]);
  expect(toArray({ _: 'green', sm: 'blue', lg: 'red' }, false)).toEqual([
    'green',
    'green',
    'blue',
    'blue',
    'red',
    'red'
  ]);
});

test('narrow array', () => {
  expect(narrow(['3rem', '3rem', '3rem', '4rem', '4rem', '5rem'])).toEqual(['3rem', null, null, '4rem', null, '5rem']);

  expect(narrow([null, '3rem', '3rem', '4rem', '4rem', '5rem'])).toEqual([null, '3rem', null, '4rem', null, '5rem']);
});

test('get array value', () => {
  expect(getArrayValue(['3rem', null, null, '4rem', null, '5rem'], 0)).toEqual('3rem');
  expect(getArrayValue(['3rem', null, null, '4rem', null, '5rem'], 1)).toEqual('3rem');
  expect(getArrayValue(['3rem', null, null, '4rem', null, '5rem'], 2)).toEqual('3rem');
  expect(getArrayValue(['3rem', null, null, '4rem', null, '5rem'], 3)).toEqual('4rem');
  expect(getArrayValue(['3rem', null, null, '4rem', null, '5rem'], 4)).toEqual('4rem');
  expect(getArrayValue(['3rem', null, null, '4rem', null, '5rem'], 5)).toEqual('5rem');
});

test('get value from array', () => {
  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], 0)).toEqual('3rem');
  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], 1)).toEqual('3rem');
  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], 2)).toEqual('3rem');
  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], 3)).toEqual('4rem');
  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], 4)).toEqual('4rem');
  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], 5)).toEqual('5rem');

  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], '_')).toEqual('3rem');
  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], 'xs')).toEqual('3rem');
  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], 'sm')).toEqual('3rem');
  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], 'md')).toEqual('4rem');
  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], 'lg')).toEqual('4rem');
  expect(getValue(['3rem', null, null, '4rem', null, '5rem'], 'xl')).toEqual('5rem');
});

test('get value from object', () => {
  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, '_')).toEqual('3rem');
  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, 'xs')).toEqual('3rem');
  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, 'sm')).toEqual('3rem');
  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, 'md')).toEqual('4rem');
  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, 'lg')).toEqual('4rem');
  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, 'xl')).toEqual('5rem');

  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, 0)).toEqual('3rem');
  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, 1)).toEqual('3rem');
  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, 2)).toEqual('3rem');
  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, 3)).toEqual('4rem');
  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, 4)).toEqual('4rem');
  expect(getValue({ _: '3rem', md: '4rem', xl: '5rem' }, 5)).toEqual('5rem');
});

test('transform.map on value', () => {
  expect(transform([1, null, null, 2, null, 3]).map(x => x * 2))
    .toEqual([2, null, null, 4, null, 6]);

  expect(transform({ _: 1, md: 2, xl: 3 }).map(x => x * 2))
    .toEqual({ _: 2, md: 4, xl: 6 });

  expect(transform(1).map(x => x * 2))
    .toEqual(2);
});
