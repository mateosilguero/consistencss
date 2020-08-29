---
id: boxShadow
title: boxShadow
---

## boxShadow

generate custom shadows:

```js
import { View } from 'react-native'
import { boxShadow } from 'consistencss'

const darkShadow = boxShadow(12, 0, 3, 7, 'black', 0.5);

...
return (
    <View style={darkShadow} />
)
```

---

`boxShadow = ( elevation: number, offsetX: number, offsetY: number, blurRadius: number, color: string, opacity: number )`;

## Examples:

`boxShadow(12, 0, 3, 7, 'black', 0.5)` returns:

android -> `{ elevation: 12 }`

ios -> `{ shadowColor: 'black', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.5, shadowRadius: 7, }`

> see [shadows](effects.md#shadow-android-and-ios)
