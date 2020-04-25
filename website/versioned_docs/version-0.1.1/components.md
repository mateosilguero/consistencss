---
id: version-0.1.1-components
title: Components
original_id: components
---

Consistencss gives an implementation of RN components, with default styles

Components:

- View
- Text
- TouchableOpacity

```js
import C, { apply, extend, View, Text } from 'consistencss';

extend({
  colors: {
    primary: 'red',
    secondary: 'blue',
  },
  components: {
    View: C.p4,
    Text: apply(C.textPrimary),
    TouchableOpacity: apply(C.p2, C.bgSecondary),
  },
});

const App = () => {
  return (
    <View>
      <Text>primary text</Text>
      <TouchableOpacity
        onPress={() => console.log('button with background secondary')}
      >
        <Text>primary text</Text>
      </TouchableOpacity>
    </View>
  );
};
```
