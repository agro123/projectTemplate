import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
    title: {
      marginHorizontal: 16,
      marginVertical: 8,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
    },
  });
