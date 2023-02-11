import {StyleSheet} from 'react-native';
import {Colors} from '@theme/index';
export default () =>
  StyleSheet.create({
    codeInputContainer: {
      width: 290,
      height: 42,
      borderRadius: 5,
      backgroundColor: Colors.WHITE,
    },
    codeDigit: {
      borderRadius: 5,
      width: 35,
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor: Colors.SKYBLUE_50,
      borderWidth: 1,
      borderColor: Colors.SKYBLUE_500,
      color: Colors.SKYBLUE_500,
      fontSize: 20,
    },
  });
