---
id: theme
title: Theme
---

```js
theme: {
    alignment: {},
    colors: {},
    components: {},
    fontWeights: {},
    sizing: {}
}
```

Theme is now exported.

With the theme object, you could get the defaults or extendeds values.

Example:

theme.colors.primary -> undefined

```js
extend({
  colors: {
    primary: 'blue',
  },
});
```

then:

theme.colors.primary -> `blue`

```js
import { Text } from 'react-native'
import C, { apply, extend, theme } from 'consistencss'

...

extend({
    sizing: {
        base: 8
    },
    colors: {
        primary: 'cornflowerblue',
        secondary: 'green',
        randomcolor: '#186dfe'
    }
})

return (
    <Text style={apply(C.textPrimary, C.font8, C.uppercase)}>
        {theme.colors.primary}
    </Text>
)
```
