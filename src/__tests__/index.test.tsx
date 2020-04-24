import C, {
  apply,
  exists,
  extend,
  Text,
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
  expect(C.m4).toEqual({
    margin: 16,
  });
  expect(C.mt2).toEqual({
    marginTop: 8,
  });
  expect(C.mx9).toEqual({
    marginHorizontal: 36,
  });
  expect(C.py4).toEqual({
    paddingVertical: 16,
  });
  expect(C.elevation1).toEqual({
    elevation: 1,
  });
  C['a'] = { backgroundColor: 'red' };
  expect(C.a).toEqual({});
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
    colors: {
      primary: 'blue',
    },
    sizing: {
      base: 8,
    },
    custom: {
      will: 'ignore this',
    },
  });
  expect(C.bgPrimary).toEqual({
    backgroundColor: 'blue',
  });
  expect(C.m4).toEqual({
    margin: 8,
  });
});

test('extend should change the default style from components', () => {
  expect(View({}).props.style).toEqual([{}, {}]);
  expect(Text({}).props.style).toEqual([{}, {}]);
  expect(TouchableOpacity({}).props.style).toEqual([{}, {}]);
  extend({
    components: {
      View: apply(C.m4),
      Text: apply(C.textRed),
      TouchableOpacity: apply(C.p4),
    },
  });
  expect(View({}).props.style).toEqual([{ margin: 8 }, {}]);
  expect(View({ style: apply(C.p4, 'row') }).props.style).toEqual([
    { margin: 8 },
    { padding: 8 },
    { flexDirection: 'row' },
  ]);
  expect(View({ style: C.bgRed }).props.style).toEqual([
    { margin: 8 },
    { backgroundColor: 'red' },
  ]);
  expect(Text({}).props.style).toEqual([{ color: 'red' }, {}]);
  expect(TouchableOpacity({}).props.style).toEqual([{ padding: 8 }, {}]);
});
