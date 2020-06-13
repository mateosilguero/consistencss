---
id: version-0.6.0-typography
title: Typography
original_id: typography
---

properties for texts:

```js
import { Text } from 'react-native'
import C from 'consistencss'

...
return (
    <Text style={C.textRed}>Hello</Text>
    <Text style={C.uppercase}>World</Text>
)
```

## text

text[color: string]

set the color of text

`textBlue` -> { color: 'blue' }

## font

font[size: number]

set the font size of text

`font4` -> { fontSize: 16 }

## align

align[alignment: string]

set the alignment of text

`alignCenter` -> { textAlign: 'center' }

## alignvertical

alignvertical[alignment: string]

set the vertical alignment of text

`alignverticalCenter` -> { textAlignVertical: 'center' }

## line

line[height: number]

set the line height of text

`line2` -> { lineHeight: 8 }

`line1` -> { lineHeight: 4 }

## italic

set text to italic

`italic` -> { textTransform: 'italic' }

## uppercase

set text to uppercase

`uppercase` -> { textTransform: ' uppercase' }

## lowercase

set text to lowercase

`lowercase` -> { textTransform: 'lowercase' }

## capitalize

capitalize text

`capitalize` -> { textTransform: 'capitalize' }

## weight

weight[weight: string]

set the weight of text

`weightBold` -> { fontWeight: 'bold' }
`weight400` -> { fontWeight: '400' }

## bold

shortcut for weightBold

set the weight of text to bold

`bold` -> { fontWeight: 'bold' }

## tint

tint[color: string]

set the tint color of text

`tintYellow` -> { tintColor: 'yellow' }

> see more colors at https://reactnative.dev/docs/colors
