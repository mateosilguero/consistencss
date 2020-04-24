---
id: flex
title: Flex
---

```js
import { View } from 'react-native'
import C, { apply } from 'consistencss'

...
return (
    <View style={C.row} />
    <View style={apply(C.wrap, C.justifyBetween)} />
)
```

## row

set the flex direction to `row`

`row` -> { flexDirection: 'row' }

## wrap

set the flex wrap to `wrap`

`wrap` -> { flexWrap: 'wrap' }

## justify

justify[alignment: string]

set the justify content property:

`justifyCenter` -> { justifyContent: 'center' }

`justifyLeft` -> { justifyContent: 'left' }

`justifyBetween` -> { justifyContent: 'space-between' }

...

## items

items[alignment: string]

set the align items property:

`itemsRight` -> { alignItems: 'right' }

`itemsStart` -> { justifyContent: 'flex-start' }

...

## self

self[alignment: string]

set the align self property:

`selfCenter` -> { alignSelf: 'center' }

`selfLeft` -> { alignSelf: 'left' }

...

## content

content[alignment: string]

set the align content property:

`contentStart` -> { align-content: 'start' }

...
