---
id: version-1.1.0-effects
title: Effects
original_id: effects
---

## elevation (Android only)

> consider use [shadow](#shadow-android-and-ios) instead (cross platform).

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

## shadow (Android and iOS)

shadow[size: string]

`shadow[Xs | Sm | Md | Lg | Xl | 2xl | None]`

set shadow for an element:

[elevation](https://material.io/design/environment/elevation.html) on Android, [shadow](https://reactnative.dev/docs/shadow-props) on iOS.

```js
import { View } from 'react-native'
import C from 'consistencss'

...
return (
    <View style={C.shadowMd}>
)
```

---

- `shadowMd` returns {
  elevation: 4,
  shadowColor: 'black,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  }
- `shadowSm` returns returns {
  elevation: 2,
  shadowColor: 'black,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  }
- ...

> you could also generate your own shadow schema with [`boxShadow`](box-shadow.md) method.

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
