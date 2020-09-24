---
id: version-1.4.0-extend
title: Extend
original_id: extend
---

`extends(config: {}) => void`

The extend method, overrides the default config from `consistencss`

Where:

unit base is 4: (m4 = margin: 16, m2 = margin = 8)

custom colors are undefined

and components are styless

```js
import { Platform, Text } from 'react-native'
import C, { apply, extend, View } from 'consistencss'

...

extend({
    sizing: {
        base: 8,
        xs: 12
    },
    classes: {
        debug: apply(C.border1, C.borderRed),
    },
    colors: {
        primary: 'cornflowerblue',
        secondary: 'green',
        randomcolor: '#186dfe'
    },
    components: {
        View: apply(C.m4, C.p2)
    },
    fonts: {
        primary: Platform.select({
            android: 'monospace',
            ios: 'San Francisco',
            default: 'sans-serif',
        }),
    },
})

return (
    <>
        <Text style={apply(C.textPrimary, C.font8, C.uppercase)}>
            Hello
        </Text>
        <Text style={[C.fontXs, C.familyPrimary, C.debug]}>Hello</Text>
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

unit base is 2: (m4 = margin: 8, m2 = margin = 4)

primary color is 'cornflowerblue'

secondary color is 'green',

randomcolor is '#186dfe'

and View has some default styles.

---

## Responsive Layout

extends could help you to set a dinamic unit size, based on the device resolution, like this:

source: https://stackoverflow.com/questions/33628677/react-native-responsive-font-size

```js
import { Dimensions } from 'react-native';
import { extend } from 'consistencss';

const guidelineBaseWidth = 350;
const scale = (size: number) =>
  (Dimensions.get('window').width / guidelineBaseWidth) * size;

extend({
  sizing: {
    base: scale(16),
  },
});
```

Now, your layout is resposive, the result of styles like C.m4, C.font6 or C.px2, depends on the screen resolution/size.
