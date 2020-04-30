---
id: version-0.3.0-layout
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

## top

`top4` -> { top: 16 }

## bottom

`bottom4` -> { bottom: 16 }

## left

`left4` -> { left: 16 }

## right

`right4` -> { right: 16 }

## start

`start6` -> { start: 24 }

## end

`end2` -> { end: 8 }

## ltr

`ltr` -> { direction: 'ltr' }

## rtl

`rtl` -> { direction: 'ltrtlr' }

## overflow

set overflow behavior

overflow[behavior: string]

`overflowScroll` -> { overflow: 'scroll' }

`overflowHidden` -> { overflow: 'hidden' }
