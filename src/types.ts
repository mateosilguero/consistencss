import { ViewStyle, ImageStyle, TextStyle, StyleProp } from 'react-native';
import dictionary from './dictionary';

export type DynamicObject<T, K extends string = string> = Record<string | K, T>;

export type StringObject = DynamicObject<string>;

export type Styles = ViewStyle | ImageStyle | TextStyle;

export type StylesObject = DynamicObject<Styles, DictionaryKeys>;

export type DictionaryKeys = keyof typeof dictionary;

export type NonDictionaryKeys = keyof Omit<'', DictionaryKeys>;

export type StylesObjectKeys = string | DictionaryKeys;

export type ClassesKey = DynamicObject<StyleProp<Styles | {}>>;
