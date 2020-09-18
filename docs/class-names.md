---
id: classNames
title: classNames
---

class names API. insert styles using class names.

```js
import { classNames } from 'consistencss';

const App = () => {
  return <View style={classNames('shadowMd p2 radius4')}>...</View>;
};

const App = ({ withBg, withMargin }) => {
  return (
    <View
      style={classNames('shadowMd p2 radius4', {
        bgRed: withBg,
        'mx2 my4': withMargin,
      })}
    >
      ...
    </View>
  );
};
```
