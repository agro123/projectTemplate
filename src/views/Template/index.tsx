import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {MainView} from 'components';
import {PropsScreen} from 'config/interfaces/general.interface';
import useStyles from './styles';
import {Fonts} from '@theme/index';
import ButtonLinear from 'components/ButtonLinear/ButtonLinear';
import Carousel from 'components/Carousel';

const Template: React.FC<PropsScreen> = props => {
  const {navigation} = props;
  const {t} = useTranslation();
  const styles = useStyles();

  const [wasPressed, setWasPressed] = useState(false);

  const toggleButtonState = () => setWasPressed(!wasPressed);
  return (
    <MainView loading={false}>
      <ScrollView>
        <Text style={styles.title}>{t('template_hello_world')}</Text>
        <View style={styles.section}>
          <Text style={Fonts.h2}>{t('template_title_LinearButton')}</Text>
          <ButtonLinear mt={8} title="Press me!" onPress={toggleButtonState} />
          <ButtonLinear
            mt={8}
            title="Press me!"
            onPress={toggleButtonState}
            type="secondary"
          />
          <ButtonLinear
            mt={8}
            title="Press me!"
            onPress={toggleButtonState}
            type="danger"
          />
          <ButtonLinear
            mt={8}
            title="Press me!"
            onPress={toggleButtonState}
            type="orange"
          />
          <ButtonLinear
            mt={8}
            title="You can't press me"
            onPress={toggleButtonState}
            disabled
          />
        </View>
        <View style={[styles.section, {height: 300}]}>
          <Text style={Fonts.h2}>{t('template_title_Carousel')}</Text>
          <Carousel />
        </View>
      </ScrollView>
    </MainView>
  );
};

export default Template;
