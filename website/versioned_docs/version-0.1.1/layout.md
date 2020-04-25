---
id: version-0.1.1-layout
title: Layout
original_id: layout
---

```js
import { View } from 'react-native'
import C, { apply } from 'consistencss'

...
return (
    <View style={C.absolute} />
    <View style={C.ltr} />
    <View style={C.rtl} />
)
```

## absolute

`absolute` -> { position: 'absolute' }

## ltr

`ltr` -> { direction: 'ltr' }

## rtl

`rtl` -> { direction: 'ltrtlr' }
