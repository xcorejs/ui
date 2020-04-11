import { merge } from '../../src/utils/merge';
import { CardProps } from '../../src';

test('deeply merge props', () => {
  expect(merge<CardProps>({
    _header: {
      padding: { _: 1, sm: 2, md: 3 }
    },
    color: 'green',
    margin: [10, 20, 30]
  })).toEqual({
    _header: {
      padding: { _: 1, sm: 2, md: 3 }
    },
    color: 'green',
    margin: [10, 20, 30]
  });

  expect(
    merge<CardProps>({
      _header: {
        padding: { _: 1, sm: 2, md: 3 }
      },
      color: 'green',
      margin: [10, 20, 30]
    }, {
      _header: {
        padding: { xl: 5 },
        fontSize: '2rem'
      },
      color: 'red',
      margin: [0, 20, 30, 40]
    })
  ).toEqual({
    _header: {
      padding: { xl: 5 },
      fontSize: '2rem'
    },
    color: 'red',
    margin: [0, 20, 30, 40]
  });

  expect(
    Object.keys(merge<CardProps>({
      margin: [10, 20, 30],
      marginTop: '30'
    }, {
      my: '30'
    }))
  ).toEqual(
    ['margin', 'marginTop', 'my']
  );
});
