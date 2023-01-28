import React from 'react';
import {Text} from 'react-native';
import {MainView} from 'components';
import {PropsScreen} from 'config/interfaces/general.interface';
import useStyles from './styles';
import {useTranslation} from 'react-i18next';

const Template: React.FC<PropsScreen> = props => {
  const {navigation} = props;
  const {t} = useTranslation();
  const styles = useStyles();
  return (
    <MainView loading={false}>
      <Text style={styles.testStyle}>{t('template_hello_world')}</Text>
    </MainView>
  );
};

export default Template;
