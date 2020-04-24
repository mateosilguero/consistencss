import { StyleSheet } from 'react-native';
// @ts-ignore
import { Suite } from 'benchmark';
import C, { apply } from '../index';

const suite = new Suite();

test("perfomance matters, consistencss's apply should be similar than StyleSheet.create", () => {
  suite
    .add('StyleSheet.create', function() {
      StyleSheet.create({
        test: {
          backgroundColor: 'red',
          margin: 16,
          textAlign: 'center',
          color: 'skyblue',
          paddingVertical: 16,
        },
        test2: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      });
    })
    .add('apply', function() {
      apply(C.bgRed, C.m4, C.alignCenter, C.textSkyblue, C.py);
      apply(C.row, C.justifyBetween);
    })
    // add listeners
    .on('cycle', function(event: any) {
      console.log(String(event.target));
    })
    .on('complete', function() {
      // @ts-ignore
      expect(this[0].hz - this[1].hz).toBeLessThan(3000);
    })
    .run();
});
