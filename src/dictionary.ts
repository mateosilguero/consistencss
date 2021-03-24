import {
  getColorForKey,
  getFontFamily,
  getFontWeigth,
  getBoxShadow,
  getSizeForKey,
  getTextAlign,
} from './getters';
import { atomGenerator, capitalize } from './utils';
import constants from './constants';
import { Dimensions, TextStyle } from 'react-native';

const compose = (transformer: Function = (v: string) => v) => (
  property: keyof Omit<TextStyle, 'testID'> | 'tintColor'
) => (value: string, key?: string) =>
  atomGenerator(property, transformer(value, key));

const getColorFor = compose(getColorForKey);
const getSizeFor = compose(getSizeForKey);
const getFontWeightFor = compose(getFontWeigth);
const getAlignmentFor = compose(getTextAlign);
const keyAsValue = compose((_: string, k: string) => k);

interface keysWithSides {
  ''?: any;
  border?: any;
  radius?: any;
  p?: any;
  m?: any;
}

const sides = ['', 'top', 'bottom', 'left', 'right', 'start', 'end'] as const;
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
  align: getAlignmentFor('textAlign'),
  alignvertical: getAlignmentFor('textAlignVertical'),
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
      ? getColorFor(`border${position}Color` as 'borderColor')
      : getSizeFor(`border${position}Width` as 'borderWidth'))(value);
  }),
  ...getSidesFor('radius', position =>
    getSizeFor(`border${position}Radius` as 'borderRadius')
  ),
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
  ...getSidesFor(
    'p',
    position => getSizeFor(`padding${position}` as 'padding'),
    true
  ),
  py: getSizeFor('paddingVertical'),
  px: getSizeFor('paddingHorizontal'),
  ...getSidesFor(
    'm',
    position => getSizeFor(`margin${position}` as 'margin'),
    true
  ),
  my: getSizeFor('marginVertical'),
  mx: getSizeFor('marginHorizontal'),
  //layout
  absolute: keyAsValue('position'),
  ltr: keyAsValue('direction'),
  rtl: keyAsValue('direction'),
  /* layout: top, bottom, left, right, start, end */
  ...getSidesFor('', position =>
    getSizeFor(position.toLowerCase() as typeof sides[1])
  ),
  overflow: compose()('overflow'),
  // flexbox
  flex: compose((value: string) => Number(value || 1))('flex'),
  row: keyAsValue('flexDirection'),
  wrap: keyAsValue('flexWrap'),
  justify: getAlignmentFor('justifyContent'),
  items: getAlignmentFor('alignItems'),
  self: getAlignmentFor('alignSelf'),
  content: getAlignmentFor('alignContent'),
  // effects
  elevation: compose((value: string) => Number(value))('elevation'),
  opacity: compose((value: string) => Number(value) / 100)('opacity'),
  shadow: getBoxShadow,
};

export type DictionaryKeys = keyof typeof dictionary;

export default dictionary;
