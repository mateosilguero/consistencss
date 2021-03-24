import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import C, { apply, extend } from 'consistencss';
import HomeScreen from './views/Home';
import AnotherScreen from './views/Another';
import { Platform } from 'react-native';

extend({
  colors: {
    primary: 'cornflowerblue',
    secondary: 'green',
  },
  fonts: {
    primary: Platform.select({
      android: 'monospace',
      ios: 'Arial',
      default: 'sans-serif',
    }),
  },
  components: {
    Text: apply(C.textBlue, C.m8, C.uppercase, { fontSize: 24 }),
    TextInput: apply(C.borderRed, C.borderHairline, C.font4, C.px3),
    TouchableOpacity: apply(C.bgRed),
  },
  sizing: {
    xs: 12,
    s: 14,
    m: 16,
  },
  layout: {
    sm: 300,
    md: 500,
    lg: 700,
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Another" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
