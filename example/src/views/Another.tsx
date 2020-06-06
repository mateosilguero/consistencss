/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { FC } from 'react';
import C, {
  apply,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'consistencss';
import { NavigationStack } from '../types';

const row = apply(C.itemsCenter, C.justifyBetween, C.row);

const Another: FC<{ navigation: NavigationStack }> = ({ navigation }) => {
  return (
    <>
      <View style={row}>
        <Text style={apply(C.textBlue, C.font4)}>left</Text>
        <Text style={apply(C.textSecondary, C.weightBold)}>right</Text>
      </View>
      <TextInput placeholder="search..." />
      <TouchableOpacity
        style={apply(C.m4, C.radius4)}
        onPress={() => navigation.goBack()}
      >
        <Text style={apply(C.textWhite)}>Go back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={apply(C.mx8, C.p0, C.radius100)}>
        <Text style={apply(C.textWhite, C.alignCenter)}>no effect</Text>
      </TouchableOpacity>
    </>
  );
};

export default Another;
