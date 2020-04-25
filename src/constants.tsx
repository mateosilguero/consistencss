import { StyleSheet } from 'react-native';
import { AnyObject, StringObject, DynamicObject, StylesObject } from './types';

const sizing: AnyObject = {
  base: 16,
  hairline: StyleSheet.hairlineWidth,
  quarter: '25%',
  half: '50%',
  full: '100%',
};

export const components: DynamicObject<StylesObject> = {
  Text: {},
  TouchableOpacity: {},
  View: {},
};

const colors: StringObject = {};

const fontWeights: StringObject = {
  '': 'normal',
  hairline: '100',
  thin: '200',
  light: '300',
  normal: 'normal',
  medium: '500',
  semibold: '600',
  bold: 'bold',
  extrabold: ' 800',
  black: '900',
};

const alignment: StringObject = {
  left: 'left',
  center: 'center',
  right: 'right',
  justify: 'justify',
  stretch: 'stretch',
  start: 'flex-start',
  end: 'flex-end',
  baseline: 'baseline',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

export default {
  alignment,
  colors,
  components,
  fontWeights,
  sizing,
} as DynamicObject<AnyObject>;
