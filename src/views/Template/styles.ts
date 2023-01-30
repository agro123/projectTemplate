import {Fonts} from '@theme/index';
import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    title: {
      ...Fonts.h1,
      fontWeight: '700',
      textAlign: 'center',
    },
    section: {
      width: '100%',
      marginVertical: 16,
    },
  });
