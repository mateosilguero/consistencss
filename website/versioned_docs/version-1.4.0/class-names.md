---
id: version-1.4.0-classNames
title: classNames
original_id: classNames
---

> API inspired by https://github.com/JedWatson/classnames

class names API. insert styles using class names.

```js
import { classNames } from 'consistencss';

const App = () => {
  return <View style={classNames('shadowMd p2 radius4')}>...</View>;
};
```

```js
import { extend } from 'consistencss';

extend({
  classes: {
    disabled: classNames('bgGrey'),
  },
});

const App = ({ withBg, withMargin, index, disabled }) => {
  return (
    <View
      style={classNames('shadowMd p2 radius4', {
        bgRed: withBg,
        disabled,
        'mx2 my4': withMargin,
        wHalf: index % 2 === 0,
      })}
    >
      ...
    </View>
  );
};
```
