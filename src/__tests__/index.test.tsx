import C, {
  apply,
  boxShadow,
  classNames,
  exists,
  extend,
  responsive,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from '../index';

test('C proxy get', () => {
  expect(C.bgRed).toEqual({
    backgroundColor: 'red',
  });
  expect(C.mYellow).toEqual({
    margin: NaN,
  });
  expect(C.weightRed).toEqual({
    fontWeight: undefined,
  });
  expect(C.weight).toEqual({
    fontWeight: 'normal',
  });
  expect(C.weightBold).toEqual({
    fontWeight: 'bold',
  });
  expect(C.weight700).toEqual({
    fontWeight: undefined,
  });
  expect(C.alignNone).toEqual({
    textAlign: undefined,
  });
  expect(C.textYellow).toEqual({
    color: 'yellow',
  });
  expect(C).toEqual({});
  expect(C.alignCenter).toEqual({
    textAlign: 'center',
  });
  expect(C.line4).toEqual({
    lineHeight: 16,
  });
  expect(C.m4).toEqual({
    margin: 16,
  });
  expect(C.mt2).toEqual({
    marginTop: 8,
  });
  expect(C.mt_2).toEqual({
    marginTop: -8,
  });
  expect(C.mx9).toEqual({
    marginHorizontal: 36,
  });
  expect(C.mx_9).toEqual({
    marginHorizontal: -36,
  });
  expect(C.py4).toEqual({
    paddingVertical: 16,
  });
  expect(C.elevation1).toEqual({
    elevation: 1,
  });
  expect(C.flex).toEqual({
    flex: 1,
  });
  expect(C.overflowHidden).toEqual({
    overflow: 'hidden',
  });
  C.a = { backgroundColor: 'red' };
  expect(() =>
    Object.defineProperty(C, 'b', {
      value: 42,
      writable: false,
    })
  ).toThrow(TypeError);
  expect(C.a).toEqual({});
  expect(C.b).toEqual({});
  expect(C).toEqual({});
});

test('apply should return an array of styles', () => {
  expect(apply(C.m4)).toEqual([{ margin: 16 }]);
  expect(apply(C.my2, C.bgRed, C.uppercase)).toEqual([
    { marginVertical: 8 },
    { backgroundColor: 'red' },
    { textTransform: 'uppercase' },
  ]);
  // apply also accepts strings
  expect(apply(C.lowercase, 'font4', 'textBlue', 'opacity100')).toEqual([
    { textTransform: 'lowercase' },
    { fontSize: 16 },
    { color: 'blue' },
    { opacity: 1 },
  ]);
});

test('apply should always return a flatted array', () => {
  expect(apply(apply(C.m4))).toEqual([{ margin: 16 }]);
  expect(apply([{ flexWrap: 'wrap' }], [{ margin: 16 }])).toEqual([
    { flexWrap: 'wrap' },
    { margin: 16 },
  ]);
});

test('classNames should return an array of styles by class names', () => {
  expect(classNames('m4 p2 textRed')).toEqual([
    { margin: 16 },
    { padding: 8 },
    { color: 'red' },
  ]);
  expect(
    classNames('mt4', {
      p2: true,
      'textRed mb2': 4 % 2 === 0,
      font4: false,
    })
  ).toEqual([
    { marginTop: 16 },
    { padding: 8 },
    { color: 'red' },
    { marginBottom: 8 },
  ]);
  expect(
    classNames(
      'mt4',
      {
        p2: true,
      },
      'mb2',
      {
        'textRed mb2': 4 % 2 === 0,
        font4: false,
      }
    )
  ).toEqual([
    { marginTop: 16 },
    { padding: 8 },
    { marginBottom: 8 },
    { color: 'red' },
    { marginBottom: 8 },
  ]);
  expect(
    classNames(
      apply(C.bgRed, C.mt2),
      C.font4,
      {
        p2: true,
      },
      'mb2',
      {
        'textRed ml2': 4 % 2 === 0,
        font4: false,
      }
    )
  ).toEqual([
    { padding: 8 },
    { marginBottom: 8 },
    { color: 'red' },
    { marginLeft: 8 },
    { backgroundColor: 'red', fontSize: 16, marginTop: 8 },
  ]);
  expect(classNames(C.bgRed, C.font4, C.p2)).toEqual([
    { backgroundColor: 'red', fontSize: 16, padding: 8 },
  ]);
});

test('responsive util', () => {
  extend({
    layout: {
      sm: 300,
      md: 500,
      lg: 501,
    },
  });

  expect(
    responsive({
      xs: apply(C.bgGreen),
      sm: apply(C.bgBlue),
      lg: apply(C.bgRed),
    })
  ).toEqual([{ backgroundColor: 'red' }]);

  expect(
    responsive({
      xxl: apply(C.bgRed),
    })
  ).toEqual([]);
});

test('compose classes', () => {
  extend({
    classes: {
      disabled: classNames(null, 'bgGray borderRed'),
      debug: apply(C.border1, C.borderRed),
      letter0: { letterSpacing: 0 },
    },
  });

  expect(classNames('disabled')).toEqual([
    { backgroundColor: 'gray' },
    { borderColor: 'red' },
  ]);

  expect(C.disabled).toEqual([
    { backgroundColor: 'gray' },
    { borderColor: 'red' },
  ]);

  expect(C.debug).toEqual([{ borderWidth: 4 }, { borderColor: 'red' }]);

  expect(C.letter0).toEqual({ letterSpacing: 0 });
});

test('exists return true is a key is valid', () => {
  expect(exists('m4')).toBe(true);
  expect(exists('m')).toBe(true);
  expect(exists('notExists')).toBe(false);
  expect(exists('notEitherExists')).toBe(false);
  expect(exists('bg')).toBe(true);
  expect(exists('self')).toBe(true);
});

test('extend should change the default values from constants', () => {
  expect(C.bgPrimary).toEqual({
    backgroundColor: 'primary',
  });
  expect(C.m4).toEqual({
    margin: 16,
  });
  extend({
    // necesary for test non-ts code;
    // @ts-ignore
    notExists: {
      key: 'value',
    },
    colors: {
      primary: 'blue',
      primaryDark: 'darkblue',
    },
    fonts: {
      primary: 'Roboto',
    },
    sizing: {
      base: 2,
    },
  });
  expect(C.bgPrimary).toEqual({
    backgroundColor: 'blue',
  });
  expect(C.bgPrimaryDark).toEqual({
    backgroundColor: 'darkblue',
  });
  expect(C.bgPrimarydark).toEqual({
    backgroundColor: 'darkblue',
  });
  expect(C.m4).toEqual({
    margin: 8,
  });
  expect(C.familyConsolas).toEqual({
    fontFamily: 'consolas',
  });
  expect(C.familyPrimary).toEqual({
    fontFamily: 'Roboto',
  });
});

test('extend should change the default style from components', () => {
  expect(View({})?.props.style).toEqual([]);
  expect(Text({})?.props.style).toEqual([]);
  expect(TouchableOpacity({})?.props.style).toEqual([]);
  expect(TextInput({}).props.style).toEqual([]);
  extend({
    components: {
      View: apply(C.m4),
      Text: apply(C.textRed),
      TouchableOpacity: apply(C.p4),
      TextInput: apply(C.px2),
    },
    colors: undefined,
  });
  expect(View({})?.props.style).toEqual([{ margin: 8 }]);
  expect(View({ style: apply(C.p4, 'row') })?.props.style).toEqual([
    { margin: 8 },
    { padding: 8 },
    { flexDirection: 'row' },
  ]);
  expect(View({ style: C.bgRed })?.props.style).toEqual([
    { margin: 8 },
    { backgroundColor: 'red' },
  ]);
  expect(Text({})?.props.style).toEqual([{ color: 'red' }]);
  expect(TouchableOpacity({})?.props.style).toEqual([{ padding: 8 }]);
  expect(TextInput({}).props.style).toEqual([{ paddingHorizontal: 4 }]);
});

test('boxShadow should generate shadow box object', () => {
  expect(boxShadow(1, 0, 2, 4, 'black', 0.2)).toEqual({
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  });
});
