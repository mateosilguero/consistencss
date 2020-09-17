import { StyleProp } from 'react-native';
import constants from './constants';
import dictionary, { DictionaryKeys } from './dictionary';
import { DynamicObject, Styles, StylesObject } from './types';
import { camelCaseSplit, isEmpty, warnOnInvalidKey } from './utils';

export const apply = (
  ...styles: Array<StyleProp<Styles> | string>
): StyleProp<Styles | {}> =>
  styles.flatMap(s => (typeof s === 'string' ? C[s] : s));

export const classNames = (classes: string) =>
  classes.split(' ').map(name => C[name]);

type ConstantsKey = keyof typeof constants;

const StylesCacheManager = {
  cache: {} as DynamicObject<Styles>,
  get: (key: string) => StylesCacheManager.cache[key],
  set: (key: string, value: Styles) => {
    StylesCacheManager.cache[key] = value;
  },
  clear: () => {
    StylesCacheManager.cache = {};
  },
};

export const extend = (custom: Partial<typeof constants>) => {
  // clear cache to override previous values with new config
  StylesCacheManager.clear();
  Object.keys(custom).forEach((type: string) => {
    const t = type as ConstantsKey;
    Object.keys(custom[t] || {}).forEach(method => {
      if (constants.hasOwnProperty(t)) {
        constants[t][method.toLowerCase()] = custom[t]?.[method];
      }
    });
  });
};

export const exists = (key: string): boolean => key in C;

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
    const valueInCache = StylesCacheManager.get(name);
    if (valueInCache) return valueInCache;
    const valueForKey = dictionary[key]?.(value, key);
    StylesCacheManager.set(name, valueForKey);
    return valueForKey;
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

type Consistencss = {
  [key in DictionaryKeys]: {};
} & {
  [k: string]: {};
};

export const C = new Proxy({}, handler) as Consistencss;
