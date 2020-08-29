---
id: version-1.1.0-usage
title: Usage
sidebar_label: Usage
original_id: usage
---

```js
import { View } from 'react-native';
import C, { apply } from 'consistencss';

// ...
const App = () => {
  return (
    <View style={apply(C.m4, C.p2, C.bgRed)}>
      <Text style={C.textRed}></Text>
      <Text style={[C.textBlue, C.m6]}></Text>
      <Text style={styles.subtitle}></Text>
    </View>
  );
};

// apply also accepts strings
const styles = {
  title: apply(C.font6, C.uppercase),
  subtitle: apply('capitalize', C.mt2),
};
```

## Set your theme using `extend`

```js
import { View } from 'react-native';
import C, { apply, extend } from 'consistencss';

extend({
  colors: {
    primary: 'cornflowerblue',
    secondary: 'green',
    randomcolor: '#f2d687',
  },
});

const App = () => {
  return (
    <View style={apply(C.bgPrimary)}>
      <View style={apply(C.bgRandomcolor)}></View>
    </View>
  );
};
```

or change the default base size (4):

```js
import { Text, View } from 'react-native';
import C, { apply, extend } from 'consistencss';

// the default base is 4, so m4 = margin: 16
// m2 = margin: 8

extend({
  sizing: {
    base: 2,
    xs: 12,
  },
});

// chaging to 2, m4 = margin: 8
// m2 = margin: 4

const App = () => {
  return (
    <View style={apply(C.mt4)}>
      <Text style={C.fontXs}>Hello</Text>
    </View>
  );
};
```

even you could set default styles for componentes, like View, Text and TouchableOpacity

```js
import C, { apply, extend, View } from 'consistencss';

extend({
  components: {
    View: apply(C.bgYellow, C.p4),
  },
});

const App = () => {
  // we import View from consistencss
  // and this have a default style
  return <View></View>;
};
```

Now you can go to read the [API](background.md) specification
