import {
  getColorForKey,
  getFontFamily,
  getFontWeigth,
  getBoxShadow,
  getSizeForKey,
  getTextAlign,
  getCustomClass,
} from './getters';
import { atomGenerator, capitalize } from './utils';
import constants from './constants';
import { Dimensions } from 'react-native';

const compose = (transformer: Function = (v: string) => v) => (
  property: string
) => (value: string, key?: string) =>
  atomGenerator(property, transformer(value, key));

const getColorFor = compose(getColorForKey);
const getSizeFor = compose(getSizeForKey);
const getFontWeightFor = compose(getFontWeigth);
const geAlignmentFor = compose(getTextAlign);
const getClass = compose(getCustomClass);
const keyAsValue = compose((_: string, k: string) => k);

interface keysWithSides {
  ''?: any;
  border?: any;
  radius?: any;
  p?: any;
  m?: any;
}

const sides = ['', 'top', 'bottom', 'left', 'right', 'start', 'end'];
const getSidesFor = (
  property: keyof keysWithSides,
  f: (position: string) => {},
  shortPosition: boolean = false
): keysWithSides =>
  sides.reduce(
    (acc, current) => ({
      ...acc,
      [property + (shortPosition ? current[0] || '' : current)]: f(
        capitalize(current)
      ),
    }),
    {}
  );

const dictionary = {
  // background color
  bg: getColorFor('backgroundColor'),
  //typography
  text: getColorFor('color'),
  font: getSizeFor('fontSize'),
  family: compose(getFontFamily)('fontFamily'),
  align: geAlignmentFor('textAlign'),
  alignvertical: geAlignmentFor('textAlignVertical'),
  line: getSizeFor('lineHeight'),
  italic: keyAsValue('fontStyle'),
  uppercase: keyAsValue('textTransform'),
  lowercase: keyAsValue('textTransform'),
  capitalize: keyAsValue('textTransform'),
  bold: keyAsValue('fontWeight'),
  weight: getFontWeightFor('fontWeight'),
  tint: getColorFor('tintColor'),
  // borders
  ...getSidesFor('border', position => (value: string) => {
    return (isNaN(Number(value)) && !constants.sizing[value]
      ? getColorFor(`border${position}Color`)
      : getSizeFor(`border${position}Width`))(value);
  }),
  ...getSidesFor('radius', position => getSizeFor(`border${position}Radius`)),
  // sizing
  h: getSizeFor('height'),
  hscreen: compose(() => Dimensions.get('window').height)('height'),
  maxh: getSizeFor('maxHeight'),
  minh: getSizeFor('minHeight'),
  w: getSizeFor('width'),
  wscreen: compose(() => Dimensions.get('window').width)('width'),
  maxw: getSizeFor('maxWidth'),
  minw: getSizeFor('minWidth'),
  // spacing
  ...getSidesFor('p', position => getSizeFor(`padding${position}`), true),
  py: getSizeFor('paddingVertical'),
  px: getSizeFor('paddingHorizontal'),
  ...getSidesFor('m', position => getSizeFor(`margin${position}`), true),
  my: getSizeFor('marginVertical'),
  mx: getSizeFor('marginHorizontal'),
  //layout
  absolute: keyAsValue('position'),
  ltr: keyAsValue('direction'),
  rtl: keyAsValue('direction'),
  /* layout: top, bottom, left, right, start, end */
  ...getSidesFor('', position => getSizeFor(position.toLowerCase())),
  overflow: compose()('overflow'),
  // flexbox
  flex: compose((value: string) => Number(value || 1))('flex'),
  row: keyAsValue('flexDirection'),
  wrap: keyAsValue('flexWrap'),
  justify: geAlignmentFor('justifyContent'),
  items: geAlignmentFor('alignItems'),
  self: geAlignmentFor('alignSelf'),
  content: geAlignmentFor('alignContent'),
  // effects
  elevation: compose((value: string) => Number(value))('elevation'),
  opacity: compose((value: string) => Number(value) / 100)('opacity'),
  shadow: getBoxShadow,
  class: getClass('class'),
};

export type DictionaryKeys = keyof typeof dictionary;

export default dictionary;
