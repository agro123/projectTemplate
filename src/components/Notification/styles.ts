import {StyleSheet} from 'react-native';

export default (Colors: any) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      width: '95%',
      maxWidth: 400,
      minHeight: 50,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 10,
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 8,
      backgroundColor: 'rgba(23, 24, 30, 0.7)',
      zIndex: 999,
    },
    messageView: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
      width: '85%',
      marginHorizontal: 5,
    },
    title: {
      alignSelf: 'auto',
      color: Colors.WHITE,
      fontSize: 14,
      fontWeight: '700',
    },
    description: {
      alignSelf: 'auto',
      color: Colors.WHITE,
      fontSize: 13,
      fontWeight: '500',
    },
    icRainbow: {
      width: 15,
      height: 15,
    },
  });
