---
id: version-0.2.0-sizing
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

`hFull` -> { height: '100% }

`hHalf` -> { height: '50% }

`hQuarter` -> { height: '25% }

## maxh: maxHeight

maxh[size: number]

`maxh8` -> { maxHeight: 32 }

## w: width

w[size: number]

`w6` -> { width: 24 }

`wFull` -> { width: '100% }

`wHalf` -> { width: '50% }

`wQuarter` -> { width: '25% }

## maxw: maxWidth

maxw[size: number]

`maxw8` -> { maxWidth: 32 }

## wscreen

`wscreen` -> { width: Dimensions.get('window').width }

## hscreen

`hscreen` -> { height: Dimensions.get('window').height }

> this properties just get the current value, to suscribe to screen rotation changes, please use [useWindowDimensions](https://reactnative.dev/docs/usewindowdimensions) inside your component

```js
import { View, useWindowDimensions } from 'react-native'
import C, { apply } from 'consistencss'

...
const A = () => {
    useWindowDimensions()
    return (
        <View style={apply(C.hscreen, C.wscreen)} />
    )
}
```
