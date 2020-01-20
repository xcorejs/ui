import convert from '../../src/utils/convert';
import { breakpoints } from '../../src/theme';

const {
  valueToArray,
  objToArray,
  toArray
} = convert(breakpoints(['30em', '48em', '64em', '78em', '85em']).breakpoints);

test('convert value to array', () => {
  expect(valueToArray('3rem')).toEqual(['3rem', '3rem', '3rem', '3rem', '3rem', '3rem']);
});

test('convert object to array', () => {
  expect(objToArray({ _: 'green', sm: 'blue', lg: 'red' })).toEqual([
    'green',
    'green',
    'blue',
    'blue',
    'red',
    'red'
  ]);
});

test('convert to array', () => {
  expect(toArray('3rem')).toEqual(['3rem', '3rem', '3rem', '3rem', '3rem', '3rem']);

  expect(toArray({ _: 'green', sm: 'blue', lg: 'red' })).toEqual([
    'green',
    'green',
    'blue',
    'blue',
    'red',
    'red'
  ]);

});
