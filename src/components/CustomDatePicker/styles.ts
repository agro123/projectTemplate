import {StyleSheet} from 'react-native';

export default Colors =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    label: {
      fontSize: 16,
      fontWeight: '500',
      color: Colors.GRAYSCALE_800,
      marginBottom: 8,
      lineHeight: 20,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    required: {
      fontSize: 16,
      fontWeight: '500',
      color: Colors.SEMANTIC_ERROR,
      lineHeight: 20,
      paddingBottom: 5,
    },
    btnCalendar: {
      width: '100%',
      height: 48,
      borderRadius: 5,
      paddingHorizontal: 8,
      paddingVertical: 14,
      borderWidth: 1,
      borderColor: Colors.GRAYSCALE_200,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    value: {
      fontSize: 14,
      color: Colors.GRAYSCALE_900,
    },
    labelError: {
      fontSize: 16,
      fontWeight: '400',
      color: Colors.SEMANTIC_ERROR,
      marginTop: 4,
      lineHeight: 20,
    },
  });
