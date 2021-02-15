import { Dimensions, StyleProp } from 'react-native';
import constants, { Breakpoint } from './constants';
import dictionary, { DictionaryKeys } from './dictionary';
import { DynamicObject, Styles, StylesObject } from './types';
import { camelCaseSplit, isEmpty, warnOnInvalidKey } from './utils';

export const apply = (
  ...styles: Array<StyleProp<Styles> | string>
): StyleProp<Styles | {}> =>
  styles
    .filter(s => !isEmpty(s))
    .flatMap(s => (typeof s === 'string' ? C[s] : s));

export const classNames = (
  ...params: Array<string | DynamicObject<boolean> | StyleProp<Styles | {}>>
) => {
  const styles: StyleProp<Styles | {}> = {};
  let classes: string = '';

  params.forEach(param => {
    if (Array.isArray(param)) {
      Object.assign(styles, ...param);
      return;
    }

    if (typeof param === 'object') {
      Object.entries(param || {}).forEach(([key, value]) => {
        if (typeof value === 'boolean') {
          if (value) {
            classes += ` ${key.replace(/ +(?= )/g, '')}`;
          }
        } else {
          Object.assign(styles, param);
        }
      });
    } else if (typeof param === 'string') {
      classes += ` ${param}`;
    }
  });

  return apply(...classes.split(' '), styles);
};

export const responsive = (
  styles: Partial<Record<Breakpoint, StyleProp<Styles>>>
) => {
  const screenWidth = Dimensions.get('window').width;

  const currentStyle = Object.keys(styles).reduce((acc, key) => {
    if (screenWidth >= (constants.layout[key as Breakpoint] || 0)) {
      return styles[key as Breakpoint] as Styles;
    }
    return acc;
  }, {});

  return apply(currentStyle);
};

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
    const [key, value] = camelCaseSplit(name);
    if (
      !dictionary.hasOwnProperty(key) &&
      !constants.classes.hasOwnProperty(name)
    ) {
      warnOnInvalidKey(`The key ${key} doesnt exists`);
      return target;
    }
    const valueInCache = StylesCacheManager.get(name);
    if (valueInCache) return valueInCache;
    const valueForKey =
      constants.classes[name] ??
      dictionary[key as DictionaryKeys]?.(value, key);
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

type Consistencss = Record<DictionaryKeys, {}> & Record<string, {}>;

export const C = new Proxy({}, handler) as Consistencss;
