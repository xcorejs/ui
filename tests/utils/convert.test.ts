import convert from '../../src/utils/convert';
import { breakpoints } from '../../src/theme';

const {
  valueToArray,
  objToArray,
  toArray
} = convert(breakpoints(['30em', '48em', '64em', '78em', '85em']).breakpoints);

test('convert value to array', () => {
  expect(valueToArray('3rem')).toEqual(['3rem', null, null, null, null, null]);
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
});

test('convert to array', () => {
  expect(toArray('3rem')).toEqual(['3rem', null, null, null, null, null]);

  expect(toArray({ _: 'green', sm: 'blue', lg: 'red' })).toEqual([
    'green',
    null,
    'blue',
    null,
    'red',
    null
  ]);

});
