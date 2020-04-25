---
id: version-0.1.1-sizing
title: Sizing
original_id: sizing
---

```js
import { View } from 'react-native'
import C, { apply } from 'consistencss'

...
return (
    <View style={C.h2} />
    <View style={C.h4} />
    <View style={C.w6} />
)
```

## h: height

h[size: number]

`h4` -> { height: 16 }

`h2` -> { height: 8 }

## maxh: maxHeight

maxh[size: number]

`maxh8` -> { maxHeight: 32 }

## w: width

w[size: number]

`w6` -> { width: 24 }

## maxw: maxWidth

maxw[size: number]

`maxw8` -> { maxWidth: 32 }
