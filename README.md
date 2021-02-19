# consistencss

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
![consistencss](https://badgen.net/npm/v/consistencss?color=green)
![consistencss](https://badgen.net/bundlephobia/minzip/consistencss)
![consistencss](https://badgen.net/npm/types/consistencss)

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

See [Troubleshooting](./Troubleshooting.md).

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

Uses the classNames API, and create your custom classes !

```js
import C, { apply, extend, classNames, View, Text } from 'consistencss';

extend({
  classes: {
    debug: apply(C.border1, C.borderRed),
  },
});

const App = () => {
  return (
    <View style={C.debug}>
      <Text style={classNames('debug')}>
        ...
      </Text>
    </View>;
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
   <td align="center"><a href="https://github.com/mateosilguero"><img src="https://avatars0.githubusercontent.com/u/25598400?v=4" width="100px;" alt=""/><br /><sub><b>Mateo Silguero</b></sub></a><br /><a href="https://github.com/mateosilguero/consistencss/commits?author=mateosilguero" title="Code">💻</a></td>
    <td align="center"><a href="https://leites.dev"><img src="https://avatars2.githubusercontent.com/u/1316339?v=4" width="100px;" alt=""/><br /><sub><b>Ezequiel Leites</b></sub></a><br /><a href="https://github.com/mateosilguero/consistencss/commits?author=leiteszeke" title="Code">💻</a></td> 
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
