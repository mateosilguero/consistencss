import { StyleSheet } from 'react-native';
// @ts-ignore
import { Suite } from 'benchmark';
import C, { apply } from '../index';

test("perfomance matters, consistencss's apply should be faster than StyleSheet.create", () => {
  const suite = new Suite();
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
      });
    })
    .add('apply', function() {
      apply(C.bgRed, C.m4, C.alignCenter, C.textSkyblue, C.py);
    })
    // add listeners
    .on('cycle', function(event: any) {
      console.log(String(event.target));
    })
    .on('complete', function() {
      // expect(this[0].hz - this[1].hz).toBeLessThan(3000);
      // @ts-ignore
      expect(this.filter('fastest').map('name')[0]).toBe('apply');
    })
    .run();
});
