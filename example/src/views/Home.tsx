/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { FC } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import C, { apply, Text, View } from 'consistencss';
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
      <View style={apply(C.bgMagenta, C.h4, C.wHalf)}></View>
      <View style={apply(C.bgYellow, C.h3)}></View>
      <View style={apply(C.bgBlue, C.h)}></View>
      <View style={apply(C.bgRed, C.h4)}></View>
      <View style={apply(C.bgBlue, C.h2)}></View>
      <View style={apply({ backgroundColor: 'green' }, C.h3)}></View>
      <Text style={apply(C.textBlue, C.font4)}>blue</Text>
      <Text style={apply(C.textSecondary, C.weightBold, C.mt_1)}>
        secondary
      </Text>
      <TouchableOpacity
        style={apply(C.borderbottomRed, C.borderbottomHairline)}
      >
        <Text style={apply(C.font5, C.textPrimary, C.weightBlack)}>
          primary
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={apply(C.m4, C.bgPrimary, C.radius4)}
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
