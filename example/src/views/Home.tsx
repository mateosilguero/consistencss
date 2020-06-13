/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { FC } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import C, { apply, Text, TouchableOpacity, View } from 'consistencss';
import { NavigationStack } from '../types';

const Home: FC<{
  navigation: NavigationStack;
}> = ({ navigation }) => {
  useWindowDimensions();
  return (
    <ScrollView>
      <View style={apply(C.bgRed, C.h16, C.wscreen)}>
        <Text style={apply(C.textYellow, C.font3)}>yellow</Text>
      </View>
      <View style={apply(C.bgMagenta, C.h4, C.wHalf)} />
      <View style={apply(C.bgYellow, C.h3)} />
      <View style={apply(C.bgBlue, C.h)} />
      <View style={apply(C.bgRed, C.h4)} />
      <View style={apply(C.bgBlue, C.h2)} />
      <View style={apply({ backgroundColor: 'green' }, C.h3)} />
      <Text style={apply(C.textBlue, C.font4)}>blue</Text>
      <Text style={apply(C.textSecondary, C.weightBold, C.mt_1)}>
        secondary
      </Text>
      <TouchableOpacity>
        <Text style={C.weightBlack}>primary</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={apply(C.m4, C.radius4)}
        onPress={() => navigation.navigate('Another')}
      >
        <Text style={apply(C.textWhite)}>Navigate</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={apply(C.textBlue, C.font4)}>left</Text>
        <Text style={apply(C.textPrimary, C.font6)}>middle</Text>
        <Text style={apply(C.textSecondary, C.weightBold)}>right</Text>
      </View>
    </ScrollView>
  );
};

const styles = {
  row: apply(C.row, C.itemsCenter, C.justifyBetween),
};

export default Home;
