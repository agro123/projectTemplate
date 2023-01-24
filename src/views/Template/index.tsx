import React from 'react';
import {Text} from 'react-native';
import {MainView} from 'components';
import {PropsScreen} from 'config/interfaces/general.interface';
import useStyles from './styles';

const Template: React.FC<PropsScreen> = props => {
  const {navigation} = props;
  const styles = useStyles();
  return (
    <MainView loading={false}>
      <Text style={styles.testStyle}>Hello world...</Text>
    </MainView>
  );
};

export default Template;
