import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { DictionaryKeys } from './dictionary';

export type DynamicObject<T, K extends string = string> = Record<string | K, T>;

export type StringObject = DynamicObject<string>;

export type Styles = ViewStyle | ImageStyle | TextStyle;

export type StylesObject = DynamicObject<Styles, DictionaryKeys>;
