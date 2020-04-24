import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

type StringObject = DynamicObject<string>;

type NumberObject = DynamicObject<Number>;

type AnyObject = DynamicObject<any>;

type Styles = ViewStyle | ImageStyle | TextStyle;

type StylesObject = DynamicObject<Styles>;

interface DynamicObject<T> {
  [key: string]: T;
}
