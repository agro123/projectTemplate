import React, {useMemo, useState} from 'react';

import {Pressable, Text, View} from 'react-native';
import useStyles from './styles';
import {Colors} from '@theme/index';

interface Props {
  disabled?: boolean;
  mt?: number | string;
  mb?: number | string;
  mr?: number | string;
  ml?: number | string;
  mv?: number | string;
  mh?: number | string;
  size?: number | string;
  text?: string;
  testID?: string;
  value: boolean;
  onPress: (isChecked: boolean) => void;
  textNode?: React.ReactNode;
}

const CustomCheckBox: React.FC<Props> = props => {
  const styles = useStyles(Colors);
  const {text, onPress, disabled, value, testID, textNode, mt, mv, size} =
    props;
  const [checked, setChecked] = useState(value);

  const propStyles = useMemo(
    () => ({marginTop: mt, marginVertical: mv}),
    [mv, mt],
  );

  const onCheck = () => {
    setChecked(!checked);
    onPress(!checked);
  };
  return (
    <Pressable
      style={[styles.container, propStyles]}
      onPress={onCheck}
      disabled={disabled}
      testID={testID}>
      {/* <CheckBox
        disabled={disabled}
        value={value}
        onValueChange={newValue => onPress(newValue)}
        testID={testID}
        onCheckColor={Colors.SKYBLUE_500}
        tintColors={{false: Colors.GRAYSCALE_200, true: Colors.SKYBLUE_500}}
        onTintColor={Colors.SKYBLUE_500}
        style={[{marginLeft: 4}, size]}
        boxType="square"
      /> */}
      <View
        style={[
          disabled
            ? styles.disabled
            : checked
            ? styles.checked
            : styles.unCheck,
          styles.checkBox,
          {
            width: size,
            height: size,
          },
        ]}
      />
      <View style={{width: '90%'}}>
        {text && <Text style={styles.text}>{text}</Text>}
        {textNode && textNode}
      </View>
    </Pressable>
  );
};

export default CustomCheckBox;
