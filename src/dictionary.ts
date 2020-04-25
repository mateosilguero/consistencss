import { AnyObject } from './types';
import {
  getColorForKey,
  getFontWeigth,
  getSizeForKey,
  getTextAlign,
} from './getters';
import { atomGenerator, capitalize } from './utils';
import constants from './constants';
import { Dimensions } from 'react-native';

const compose = (transformer: Function) => (property: string) => (
  value: string,
  key?: string
) => atomGenerator(property, transformer(value, key));

const useColor = compose(getColorForKey);
const useSize = compose(getSizeForKey);
const useFontWeight = compose(getFontWeigth);
const useAlignment = compose(getTextAlign);
const useKey = compose((_: string, k: string) => k);

const sides = ['', 'top', 'bottom', 'left', 'right', 'start', 'end'];
const getSidesFor = (
  property: string,
  f: (position: string) => {},
  shortPosition: boolean = false
) =>
  sides.reduce(
    (acc, current) => ({
      ...acc,
      [property + (shortPosition ? current[0] || '' : current)]: f(
        capitalize(current)
      ),
    }),
    {}
  );

const dictionary: AnyObject = {
  // background color
  bg: useColor('backgroundColor'),
  //typography
  text: useColor('color'),
  font: useSize('fontSize'),
  align: useAlignment('textAlign'),
  line: useSize('lineHeight'),
  italic: useKey('fontStyle'),
  uppercase: useKey('textTransform'),
  lowercase: useKey('textTransform'),
  capitalize: useKey('textTransform'),
  weight: useFontWeight('fontWeight'),
  tint: useColor('tintColor'),
  // borders
  ...getSidesFor('border', position => (value: string) => {
    return (isNaN(Number(value)) && !constants.sizing[value]
      ? useColor(`border${position}Color`)
      : useSize(`border${position}Width`))(value);
  }),
  ...getSidesFor('radius', position => useSize(`border${position}Radius`)),
  // sizing
  h: useSize('height'),
  hscreen: compose(() => Dimensions.get('window').height)('height'),
  maxh: useSize('maxHeight'),
  w: useSize('width'),
  wscreen: compose(() => Dimensions.get('window').width)('width'),
  maxw: useSize('maxWidth'),
  // spacing
  ...getSidesFor('p', position => useSize(`padding${position}`), true),
  py: useSize('paddingVertical'),
  px: useSize('paddingHorizontal'),
  ...getSidesFor('m', position => useSize(`margin${position}`), true),
  my: useSize('marginVertical'),
  mx: useSize('marginHorizontal'),
  //layout
  absolute: useKey('position'),
  ltr: useKey('direction'),
  rtl: useKey('direction'),
  /* layout: top, bottom, left, right, start, end */
  ...getSidesFor('', position => useSize(position.toLowerCase())),
  // flexbox
  row: useKey('flexDirection'),
  wrap: useKey('flexWrap'),
  justify: useAlignment('justifyContent'),
  items: useAlignment('alignItems'),
  self: useAlignment('alignSelf'),
  content: useAlignment('alignContent'),
  // effects
  elevation: compose((value: string) => Number(value))('elevation'),
  opacity: compose((value: string) => Number(value) / 100)('opacity'),
};

export default dictionary;
