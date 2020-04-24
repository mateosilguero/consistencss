---
id: background
title: Backgrounds
---

## bg

to set background color to an element, use `bg` property, plus the color you desire, like:

bg[color: string]

```js
import { View } from 'react-native'
import C from 'consistencss'

...
return (
    <View style={C.bgYellow} />
)
```

## Examples:

`bgYellow` returns `{ backgroundColor: 'yellow' }`

`bgRed` returns `{ backgroundColor: 'red' }`

`bgSkyblue` returns `{ backgroundColor: 'skyblue' }`

---

also, if you set a color name using [extend](./extend.md):

`bgPrimary` returns `{ backgroundColor: '#afd123' }`

> see more colors at https://reactnative.dev/docs/colors
