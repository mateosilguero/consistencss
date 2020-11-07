import { Dimensions, StyleProp, ViewStyle } from 'react-native';
import constants, { Breakpoint } from './constants';
import dictionary from './dictionary';
import {
  DictionaryKeys,
  DynamicObject,
  NonDictionaryKeys,
  Styles,
  StylesObject,
} from './types';
import { camelCaseSplit, isEmpty, warnOnInvalidKey } from './utils';

type StylesArray = Array<StyleProp<Styles> | string>;

export const apply = (...styles: StylesArray): StyleProp<Styles> =>
  styles
    .filter(s => !isEmpty(s))
    .flatMap(s => (typeof s === 'string' ? C[s] : s));

export function classNames(
  ...params: Array<
    string | boolean | DynamicObject<boolean | undefined> | StyleProp<Styles>
  >
) {
  return apply.apply(
    undefined,
    params.reduce((acc, arg) => {
      if (!arg) return acc;
      if (typeof arg === 'string') {
        return acc.concat(arg.split(' '));
      }
      if (Array.isArray(arg)) {
        return acc.concat(arg);
      }
      if (typeof arg === 'object') {
        Object.entries(arg).forEach(([key, value]) => {
          if (value) {
            if (typeof value === 'boolean') {
              acc = acc.concat(key.split(' '));
            } else {
              acc = acc.concat({
                [key]: value,
              });
            }
          }
        });
      }
      return acc;
    }, [] as StylesArray)
  );
}

export const responsive = (
  styles: Partial<Record<Breakpoint, StyleProp<Styles>>>
) => {
  const screenWidth = Dimensions.get('window').width;

  const currentStyle = Object.keys(styles).reduce((acc, curr) => {
    const key = curr as Breakpoint;
    if (screenWidth >= (constants.layout[key] || 0)) {
      return styles[key] as Styles;
    }
    return acc;
  }, {});

  return apply(currentStyle);
};

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

type CustomConfig = string | Omit<typeof constants, 'classesDictionary'>;
type ConstantsKey = keyof CustomConfig;

export const extend = (custom: Partial<CustomConfig>) => {
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

export const exists = (key: string) => key in C;

const isAValidKey = (key: string) =>
  typeof key === 'string' && !['$$typeof', 'prototype', 'toJSON'].includes(key);

const handler = {
  get: function(target: StylesObject, name: string): StylesObject | ViewStyle {
    const valueInCache = StylesCacheManager.get(name);
    if (valueInCache) return valueInCache;

    if (!isAValidKey(name)) return target;
    const [key, value] = camelCaseSplit(name);
    if (
      !dictionary.hasOwnProperty(key) &&
      !constants.classes.hasOwnProperty(name)
    ) {
      warnOnInvalidKey(`The key ${key} doesnt exists`);
      return target;
    }
    const valueForKey =
      dictionary[key as DictionaryKeys]?.(value, key) ||
      constants.classes[name.toLowerCase() as keyof NonDictionaryKeys];

    StylesCacheManager.set(name, valueForKey);
    return valueForKey;
  },
  has: function(target: StylesObject, name: DictionaryKeys) {
    return (
      dictionary[name] !== undefined || !isEmpty(handler.get(target, name))
    );
  },
  set: function() {
    console.warn('set is not allowed. Use the extend method instead.');
    return false;
  },
  defineProperty: function() {
    console.warn(
      'defineProperty is not allowed. Use the extend method instead.'
    );
    return false;
  },
  ownKeys: function() {
    return Reflect.ownKeys(dictionary);
  },
};

type Consistencss = Record<DictionaryKeys, Styles> & Record<string, Styles>;

export const C = new Proxy({}, handler) as Consistencss;
