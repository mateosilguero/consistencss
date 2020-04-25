---
id: version-0.1.1-apply
title: Apply
original_id: apply
---

`apply(styles: Array<styles | string>) => styles[]`

Apply merge style objects into an array:

Apply also accepts valid key strings

'italic' is equal to C.italic

and customs styles are also supported

```js
import { Text } from 'react-native'
import C, { apply } from 'consistencss'

...

const subtitle = apply(C.textBlue, C.font2, C.lowercase)
return (
    <>
        <Text style={apply(C.textRed, C.font8, C.uppercase, 'italic', { padding: 18.5 })}>
            Hello
        </Text>
        <Text style={subtitle}>
            Hello
        </Text>
    </>
)

const styles = {
    title: apply(C.textPrimary, C.font15, C.capitalize)
}
```
