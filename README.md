# consistencss
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![npm version](https://badge.fury.io/js/consistencss.svg)](https://badge.fury.io/js/consistencss)

![logo](https://consistencss.now.sh/img/logo.svg 'Logo')

An "atomic css" style toolkit for React Native, inspired by [tailwindcss](https://tailwindcss.com/docs/installation/)

Full Documentation: https://consistencss.now.sh/

## Installation

```sh
npm install consistencss
```

using yarn:

```sh
yarn add consistencss
```

## Troubleshooting

### "Property 'Proxy' doesn't exist, js engine: hermes"

> android

If [Hermes](https://reactnative.dev/docs/hermes) is enabled in your project, you probably will see a red screen with the "Property 'Proxy' doesn't exist, js engine: hermes" message.

> Quick fix: disable Hermes (not recommend).

React Native 0.63 includes v0.5.0 of hermes, wich is not compatible with this lib yet. So you could install v0.5.2-rc1 temporarily.

```sh
npm install hermes-engine@v0.5.2-rc1
```

using yarn:

```sh
yarn add hermes-engine@v0.5.2-rc1
```

And React Native React Native <= 0.62.2 includes v0.4.0 of hermes, wich is not compatible either. So you could install v0.4.2-rc1 temporarily. (since Proxy was not inside hermes before)

```sh
npm install hermes-engine@v0.4.2-rc1
```

using yarn:

```sh
yarn add hermes-engine@v0.4.2-rc1
```

> https://twitter.com/HermesEngine/status/1245136667414913024

We are actively tracking the changes to Hermes to ensure support.

## Usage

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
  },
});

// chaging to 2, m4 = margin: 8
// m2 = margin: 4

const App = () => {
  return <View style={apply(C.mt4)}></View>;
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

## This repository includes:

- [source code](./src/index.tsx) (with their respective unit test and 100% of code coverage, and benchmark test)
- [an example app](./example/index.tsx)
- [documentation](./website/README.md) (powered by [docusaurus](https://docusaurus.io))

## License

MIT

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://leites.dev"><img src="https://avatars2.githubusercontent.com/u/1316339?v=4" width="100px;" alt=""/><br /><sub><b>Ezequiel Leites</b></sub></a><br /><a href="https://github.com/mateosilguero/consistencss/commits?author=leiteszeke" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!