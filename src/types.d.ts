import { ViewStyle, ImageStyle, TextStyle, StyleProp } from 'react-native';
import dictionary from './dictionary';

type StringObject = DynamicObject<string>;

type AnyObject = DynamicObject<any>;

type Styles = ViewStyle | ImageStyle | TextStyle;

type DictionaryKeys = keyof typeof dictionary;

type NonDictionaryKeys = keyof Omit<'', DictionaryKeys>;

type StylesObjectKeys = string | DictionaryKeys;

type CustomClassKeys = NonDictionaryKeys;

type ClassesKey = DynamicObject<StyleProp<Styles | {}>>;

interface DynamicObject<T> {
  [key: string]: T;
}
