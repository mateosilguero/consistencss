---
id: responsive
title: responsive
---

responsive API. apply styles depending of screen width.

```js
import { apply, classNames, extend, responsive } from 'consistencss';

extend({
  layout: {
    sm: 300,
    md: 401,
    l: 501,
  },
});

const App = ({ active }) => (
  <View
    style={responsive({
      sm: apply(C.bgRed),
      md: C.bgBlue,
      l: classNames({
        bgGreen: active,
        bgBlack: !active 
      })
    })}
  >
    ...
  </View>
);
```

Default screen size values:

```
xs: 0
sm: 411
md: 568
lg: 768
xl: 1024
xxl: 1280
```
