import dictionary from '../dictionary';
import { Dimensions } from 'react-native';

test('atomGenerator should return a new atom', () => {
  expect(dictionary.bg).toBeInstanceOf(Function);
  expect(dictionary.m).toBeInstanceOf(Function);
  expect(dictionary.mx).toBeInstanceOf(Function);
  // @ts-ignore
  expect(dictionary.mt).toBeInstanceOf(Function);
  expect(dictionary.uppercase).toBeInstanceOf(Function);
  // @ts-ignore
  expect(dictionary.notExists).toBeUndefined();
  expect(dictionary.bg('red')).toEqual({
    backgroundColor: 'red',
  });
  // border is an isomorphic key
  expect(dictionary.border('red')).toEqual({
    borderColor: 'red',
  });
  expect(dictionary.border(1)).toEqual({
    borderWidth: 4,
  });
  expect(dictionary.border('hairline')).toEqual({
    borderWidth: 0.5,
  });
  expect(dictionary.wscreen('')).toEqual({
    width: Dimensions.get('window').width,
  });
  expect(dictionary.hscreen('')).toEqual({
    height: Dimensions.get('window').height,
  });
  expect(dictionary.h('full')).toEqual({
    height: '100%',
  });
  expect(dictionary.flex('')).toEqual({
    flex: 1,
  });
  expect(dictionary.flex('2')).toEqual({
    flex: 2,
  });
  expect(dictionary.overflow('scroll')).toEqual({
    overflow: 'scroll',
  });
  expect(dictionary.family('consolas')).toEqual({
    fontFamily: 'consolas',
  });
  expect(dictionary.shadow('md')).toEqual({
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  });
  expect(dictionary.shadow('notexists')).toEqual(undefined);
});
