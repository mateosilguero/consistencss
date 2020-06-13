import { StyleProp } from 'react-native';
import constants from './constants';
import { Text, TextInput, TouchableOpacity, View } from './components';
import dictionary, { DictionaryKeys } from './dictionary';
import { Styles, StylesObject } from './types';
import { camelCaseSplit, isEmpty, warnOnInvalidKey } from './utils';
import { getSizeFor } from './getters';

const apply = (
  ...styles: Array<StyleProp<Styles> | string>
): StyleProp<Styles | {}> =>
  styles.flatMap(s => (typeof s === 'string' ? C[s] : s));

type ConstantsKey = keyof typeof constants;

function extend(custom: Partial<typeof constants>) {
  Object.keys(custom).forEach((type: string) => {
    const t = type as ConstantsKey;
    Object.keys(custom[t] || {}).forEach(method => {
      if (constants.hasOwnProperty(t)) {
        constants[t][method] = custom[t]?.[method];
      }
    });
  });
}

function exists(key: string): boolean {
  return key in C;
}

const isAValidKey = (key: string): boolean =>
  typeof key === 'string' && !['$$typeof', 'prototype', 'toJSON'].includes(key);

const handler = {
  get: function(target: StylesObject, name: string): StylesObject {
    if (!isAValidKey(name)) return target;
    const [key, value] = camelCaseSplit(name) as [DictionaryKeys, string];
    if (!dictionary.hasOwnProperty(key)) {
      warnOnInvalidKey(`The key ${key} doesnt exists`);
      return target;
    }
    return dictionary[key]?.(value, key);
  },
  has: function(target: StylesObject, name: DictionaryKeys): boolean {
    return (
      dictionary[name] !== undefined || !isEmpty(handler.get(target, name))
    );
  },
  set: function(): boolean {
    console.warn('set is not allowed. Use the extend method instead.');
    return false;
  },
  defineProperty: function(): boolean {
    console.warn(
      'defineProperty is not allowed. Use the extend method instead.'
    );
    return false;
  },
  ownKeys: function() {
    return Reflect.ownKeys(dictionary);
  },
};

export {
  apply,
  exists,
  extend,
  getSizeFor,
  constants as theme,
  Text,
  TextInput,
  TouchableOpacity,
  View,
};

type Consistencss = {
  [key in DictionaryKeys]: {};
} & {
  [k: string]: {};
};

const C = new Proxy({}, handler) as Consistencss;

export default C;
