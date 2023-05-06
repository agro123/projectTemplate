import React, {useEffect, useMemo} from 'react';
import {Animated, Text, Platform, View} from 'react-native';

import useStyles from './styles';
import {Colors} from '@theme/index';
import {useAppDispatch, useAppSelector} from 'config/hooks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {hideNotification} from './.config/notificationSlice';

const Notification = () => {
  const styles = useStyles(Colors);
  const dispatch = useAppDispatch();
  const {show, title, description, type} = useAppSelector(
    state => state.appNotification,
  );

  const animatedIsShow = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        dispatch(hideNotification());
      }, 5700);
      Animated.sequence([
        Animated.timing(animatedIsShow, {
          duration: 200,
          toValue: 0,
          useNativeDriver: false,
        }),
        Animated.timing(animatedIsShow, {
          duration: 500,
          toValue: show ? 1 : 0,
          useNativeDriver: false,
        }),
        Animated.delay(4000),
        Animated.timing(animatedIsShow, {
          duration: 1000,
          toValue: 0,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [show, animatedIsShow, dispatch]);

  const icon = useMemo(() => {
    switch (type) {
      case 'success':
        return <Icon name="check-circle" color={Colors.WHITE} size={20} />;
      case 'normal':
        return <></>;
      case 'warn':
        return <Icon name="alert" color={Colors.WHITE} size={20} />;
      case 'error':
        return <Icon name="close-circle" color={Colors.WHITE} size={20} />;
      case 'notification':
        return <Icon name="bell-badge" color={Colors.WHITE} size={20} />;
      default:
        return <></>;
    }
  }, [type]);

  const style = useMemo(
    () => ({
      top: animatedIsShow.interpolate({
        inputRange: [0, 1],
        outputRange: [-150, Platform.OS === 'ios' ? 40 : 16],
      }),
    }),
    [animatedIsShow],
  );

  return (
    <>
      {title !== '' && (
        <Animated.View style={[styles.container, style]}>
          {icon}
          <View style={styles.messageView}>
            <Text style={styles.title}>{title}</Text>
            {description && (
              <Text style={styles.description}>{description}</Text>
            )}
          </View>
          <Icon
            name="close"
            color={Colors.WHITE}
            size={20}
            onPress={() => dispatch(hideNotification())}
          />
        </Animated.View>
      )}
    </>
  );
};

export default Notification;
