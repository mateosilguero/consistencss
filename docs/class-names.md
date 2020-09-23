---
id: classNames
title: classNames
---

> API inspired by https://github.com/JedWatson/classnames

class names API. insert styles using class names.

```js
import { classNames } from 'consistencss';

const App = () => {
  return <View style={classNames('shadowMd p2 radius4')}>...</View>;
};
```

```
const App = ({ withBg, withMargin, index }) => {
  return (
    <View
      style={classNames('shadowMd p2 radius4', {
        bgRed: withBg,
        'mx2 my4': withMargin,
        wHalf: index % 2 === 0
      })}
    >
      ...
    </View>
  );
};
```