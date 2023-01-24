import {Colors} from 'assets/theme/index';
import React, {FC} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  StatusBar,
  Text,
} from 'react-native';
import {MainViewProps} from './MainView.interface';
import useStyles from './styles';
const MainView: FC<MainViewProps> = props => {
  const {children, backgroundColor = Colors.WHITE, loading} = props;
  const styles = useStyles();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={backgroundColor} />
      <View style={styles.mainView}>{children}</View>
      {loading && (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" color={Colors.SKYBLUE_500} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MainView;
