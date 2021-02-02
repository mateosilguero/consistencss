---
id: responsive
title: responsive
---

responsive API. apply styles depending of screen width.

```js
import { apply, classNames, extend, responsive } from 'consistencss';

extend({
  layout: {
    sm: {
      lte: 300,
    },
    md: {
      gte: 301,
      lte: 500,
    },
    l: {
      gte: 501,
    },
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
