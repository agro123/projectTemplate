import {StyleSheet} from 'react-native';

export default (Colors: any) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      borderBottomColor: Colors.GRAYSCALE_100,
      borderBottomWidth: 1,
      paddingVertical: 16,
    },
    titleContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    title: {
      color: Colors.GRAYSCALE_900,
      fontSize: 20,
      fontWeight: '700',
      marginRight: 5,
      width: '85%',
    },
    text: {
      color: Colors.GRAYSCALE_900,
      fontSize: 16,
      fontWeight: '400',
    },
    bodyBackground: {
      overflow: 'hidden',
    },
  });
};
