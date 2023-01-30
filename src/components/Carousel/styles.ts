import {StyleSheet} from 'react-native';
import {Colors} from '@theme/index';
export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.GRAYSCALE_100,
    },
    actionsView: {
      width: '100%',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
    dotView: {
      width: '100%',
      flexDirection: 'row',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 18,
    },
    dot: {
      width: 8,
      height: 8,
      marginHorizontal: 5,
      borderRadius: 50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
  });
};
