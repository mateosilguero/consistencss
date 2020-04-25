import { atomGenerator, camelCaseSplit, capitalize, isEmpty } from '../utils';

test('atomGenerator should return a new atom', () => {
  expect(atomGenerator('backgroundColor', 'red')).toEqual({
    backgroundColor: 'red',
  });
  expect(atomGenerator('textAlign', 'center')).toEqual({
    textAlign: 'center',
  });
  expect(atomGenerator('notARealKey', 'value')).toEqual({
    notARealKey: 'value',
  });
});

test('camelCaseSplit should a [key, value] pair from string', () => {
  expect(camelCaseSplit('bgRed')).toEqual(['bg', 'red']);
  expect(camelCaseSplit('w1')).toEqual(['w', '1']);
  expect(camelCaseSplit('w_1')).toEqual(['w', '-1']);
  expect(camelCaseSplit('mt_4')).toEqual(['mt', '-4']);
  expect(camelCaseSplit('x11234')).toEqual(['x', '11234']);
  expect(camelCaseSplit('testYellowColor')).toEqual(['test', 'yellowcolor']);
  expect(camelCaseSplit('LoremIpsum')).toEqual(['lorem', 'ipsum']);
  expect(camelCaseSplit('test')).toEqual(['test', '']);
  expect(camelCaseSplit('LOREMIpsum')).toEqual(['l', 'oremipsum']);
});

test('capitalize should return a capitalized text', () => {
  const capitalized = 'Hello';
  expect(capitalize('hello')).toEqual(capitalized);
  expect(capitalize('HELLO')).toEqual(capitalized);
  expect(capitalize('hElLO')).toEqual(capitalized);
});

test('isEmpty should returns true if entry is empty', () => {
  expect(isEmpty('')).toEqual(true);
  expect(isEmpty({})).toEqual(true);
  expect(isEmpty([])).toEqual(true);
  expect(isEmpty(null)).toEqual(true);
  expect(isEmpty([1, 2, 3])).toEqual(false);
  expect(isEmpty('example')).toEqual(false);
  expect(isEmpty({ key: 'value' })).toEqual(false);
});
