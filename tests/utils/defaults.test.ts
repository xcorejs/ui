import { ButtonProps } from 'components/Button';
import { defaults } from 'utils/defaults';

test('defaults', () => {
  expect(defaults<ButtonProps>(
    {
      color: 'blue'
    },
    {
      color: 'red',
      background: 'red',
      borderColor: 'red'
    },
    {
      color: 'green',
      borderColor: 'green',
      fontSize: '2rem'
    }
  )).toEqual({
    color: 'blue',
    background: 'red',
    borderColor: 'red',
    fontSize: '2rem'
  });
});
