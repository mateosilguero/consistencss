---
id: version-0.1.1-effects
title: Effects
original_id: effects
---

## elevation (Android only)

elevation[index: number]

set the [elevation](https://material.io/design/environment/elevation.html) of an element:

```js
import { View } from 'react-native'
import C from 'consistencss'

...
return (
    <View style={C.elevation1}>
)
```

---

- `elevation1` returns { elevation: 1 }
- `elevation` returns { elevation: 2 }
- ...

## opacity:

opacity[alpha: number]

set the visibility of an element:

```js
import { View } from 'react-native'
import C from 'consistencss'

...
return (
    <View style={C.opacity100}>
)
```

---

- `opacity100` returns { opacity: 1 }
- `opacity50` returns { elevation: 0.5 }
- `opacity25` returns { elevation: 0.25 }
- ...
