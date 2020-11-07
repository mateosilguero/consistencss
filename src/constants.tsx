import { StyleProp, StyleSheet, Platform } from 'react-native';
import { AnyObject, StringObject, DynamicObject, Styles } from './types';

const sizing: AnyObject = {
  base: 4,
  hairline: StyleSheet.hairlineWidth,
  quarter: '25%',
  half: '50%',
  full: '100%',
};

export const components: DynamicObject<StyleProp<Styles | {}>> = {
  text: {},
  textinput: {},
  touchableopacity: {},
  view: {},
};

const colors: StringObject = {};

const fonts: StringObject = {};

const classes: DynamicObject<StyleProp<Styles | {}>> = {};

const classesDictionary: string[] = [];

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

export const boxShadow = (
  elevation: number, // android
  offsetX: number, // ios
  offsetY: number,
  blurRadius: number,
  color: string,
  opacity: number
): Styles =>
  Platform.select({
    android: {
      elevation,
    },
    default: {
      shadowColor: color,
      shadowOffset: { width: offsetX, height: offsetY },
      shadowOpacity: opacity,
      shadowRadius: blurRadius,
    },
  });

const shadows: DynamicObject<Styles> = {
  '': boxShadow(3, 0, 1, 3, 'black', 0.1),
  xs: boxShadow(1, 0, 1, 1, 'black', 0.1),
  sm: boxShadow(2, 0, 1, 2, 'black', 0.1),
  md: boxShadow(4, 0, 2, 4, 'black', 0.2),
  lg: boxShadow(6, 1, 2, 5, 'black', 0.3),
  xl: boxShadow(8, 0, 2, 6, 'black', 0.4),
  '2xl': boxShadow(12, 0, 3, 7, 'black', 0.5),
  none: boxShadow(0, 0, 0, 0, 'black', 0),
};

export default {
  alignment,
  colors,
  components,
  fonts,
  fontWeights,
  shadows,
  sizing,
  classes,
  classesDictionary,
};
