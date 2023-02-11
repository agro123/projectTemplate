import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleProp,
  TextStyle,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import {ArrowDown} from 'assets/svg';

import useStyles from './styles';
import {Colors} from '@theme/index';

interface Props {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}
const Collapsible: React.FC<Props> = ({title, titleStyle, children}) => {
  const styles = useStyles(Colors);
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState(0);
  const rotate = useRef(new Animated.Value(0)).current;
  const rotateArrow = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const bodyHeight = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, size],
  });
  const toggleOpenList = () => {
    if (!opened) {
      Animated.timing(rotate, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(rotate, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
    setOpened(!opened);
  };
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Pressable
          style={styles.titleContainer}
          onPress={toggleOpenList}
          testID="show">
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <Animated.View style={{transform: [{rotate: rotateArrow}]}}>
            <ArrowDown color={Colors.GRAYSCALE_900} />
          </Animated.View>
        </Pressable>
        <Animated.View style={[styles.bodyBackground, {height: bodyHeight}]}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
            }}
            onLayout={({nativeEvent}) => {
              setSize(nativeEvent.layout.height);
            }}>
            {children}
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Collapsible;
