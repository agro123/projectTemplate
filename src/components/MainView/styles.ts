import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: Colors.WHITE,
    },
    mainView: {
      flex: 1,
      width: '100%',
      padding: 16,
    },
    loadingView: {
      flex: 1,
      width: '100%',
      backgroundColor: 'rgba(255,255,255, 0.90)',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    loadingText: {
      marginTop: 16,
      color: Colors.GRAYSCALE_900,
      fontSize: 16,
    },
  });
