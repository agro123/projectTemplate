import {StyleSheet} from 'react-native';

export default (Colors: any) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
    },
    text: {
      color: Colors.GRAYSCALE_900,
      fontWeight: '400',
      fontSize: 14,
      marginLeft: 8,
    },
    checkBox: {
      width: 24,
      height: 24,
      borderWidth: 2,
      borderRadius: 4,
    },
    unCheck: {
      backgroundColor: 'transparent',
      borderColor: Colors.GRAYSCALE_200,
    },
    checked: {
      borderColor: Colors.GRAYSCALE_200,
      backgroundColor: Colors.SKYBLUE_500,
    },
    disabled: {
      borderColor: Colors.GRAYSCALE_200,
      backgroundColor: Colors.GRAYSCALE_100,
    },
  });
};
