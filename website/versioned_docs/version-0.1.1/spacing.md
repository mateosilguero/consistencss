---
id: version-0.1.1-spacing
title: Spacing
original_id: spacing
---

control padding and margin from element:

```js
import { View } from 'react-native'
import C, { apply } from 'consistencss'

...
return (
    <View style={C.p4} />
    <View style={C.m2} />
    <View style={C.py8} />
)
```

## p

p[direction: sitring][size: number]

set padding based on number:

`p4` -> { padding: 16 }

specify side:

`p[t | b | l | r | s | e | y | x]`

`pt4` -> { paddingTop: 16 }

`px4` -> { paddingHorizontal: 16 }

`py2` -> { paddingVertical: 8 }

---

## m

m[direction: sitring][size: number]

set margin based on number:

`m2` -> { padding: 8 }

specify side:

`m[t | b | l | r | s | e | y | x]`

`mt4` -> { marginTop: 16 }

`mx4` -> { marginHorizontal: 16 }

`my2` -> { marginVertical: 8 }

## Sides:

t: top

b: bottom

l: left

r: right

s: start

e: end

y: vertical

x: horizontal
