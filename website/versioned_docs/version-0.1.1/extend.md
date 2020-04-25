---
id: version-0.1.1-extend
title: Extend
original_id: extend
---

`extends(config: {}) => void`

The extend method, overrides the default config from `consistencss`

Where:

unit base is 16: (m4 = margin: 16, m2 = margin = 8)

custom colors are undefined

and components are styless

```js
import { Text } from 'react-native'
import C, { apply, extend, View } from 'consistencss'

...

extend({
    sizing: {
        base: 8
    },
    colors: {
        primary: 'cornflowerblue',
        secondary: 'green',
        randomcolor: '#186dfe'
    },
    components: {
        View: apply(C.m4, C.p2)
    }
})

return (
    <>
        <Text style={apply(C.textPrimary, C.font8, C.uppercase)}>
            Hello
        </Text>
        {/* this View have margin 8 and padding 4 */}
        <View>
            <Text style={subtitle}>
                Hello
            </Text>
        </View>
    </>
)
```

Now:

unit base is 8: (m4 = margin: 8, m2 = margin = 4)

primary color is 'cornflowerblue'

secondary color is 'green',

randomcolor is '#186dfe'

and View has some default styles
