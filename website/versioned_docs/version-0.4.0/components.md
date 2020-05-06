---
id: version-0.4.0-components
title: Components
original_id: components
---

Consistencss gives an implementation of RN components, with default styles

Components:

- View
- Text
- TextInput
- TouchableOpacity

```js
import C, { apply, extend, View, Text, TextInput } from 'consistencss';

extend({
  colors: {
    primary: 'red',
    secondary: 'blue',
  },
  components: {
    View: C.p4,
    Text: apply(C.textPrimary),
    TextInput: apply(C.borderRed, C.borderHairline),
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
      <TextInput placeholder="search..." />
    </View>
  );
};
```
