import convert, { getArrayValue } from '../../src/utils/convert';
import { breakpoints } from '../../src/scales/breakpoints';

const {
  valueToArray,
  objToArray,
  toArray,
  narrow
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
