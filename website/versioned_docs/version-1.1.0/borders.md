---
id: version-1.1.0-borders
title: Borders
original_id: borders
---

## border

set the border style of an element, use `border` property:

```js
import { View } from 'react-native'
import C from 'consistencss'

...
return (
    <View style={C.borderYellow} />
)
```

---

border has many variants:

- border[color: string]

`borderBlue` returns { borderColor: 'blue' }

- border[width: number]

`border4` returns { borderWidth: 16 }

especify side:

border[side: string][color: string]

`border[top | bottom | left | right | start | end]`

## radius

set the border radius of an element, use `radius` property:

```js
import { View } from 'react-native'
import C from 'consistencss'

...
return (
    <View style={C.radius4} />
    <View style={C.radiusTop4} />
    <View style={C.radiusLeft2} />
)
```

especify side:

radius[side: string][size: number]

`radius[top | bottom | left | right | start | end]`

## Examples:

`bordertopYellow` returns `{ borderTopColor: 'yellow' }`

`borderleft8` returns `{ borderLeftWidth: 32 }`

`borderbottomHairline` returns `{ borderBottomWidth: 0.38095238095238093 }`

> see more colors at https://reactnative.dev/docs/colors
