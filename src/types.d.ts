import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import dictionary from './dictionary';

type StringObject = DynamicObject<string>;

type AnyObject = DynamicObject<any>;

type Styles = ViewStyle | ImageStyle | TextStyle;

interface StylesObject {
  [key: string | keyof typeof dictionary]: Styles;
}

interface DynamicObject<T> {
  [key: string]: T;
}
