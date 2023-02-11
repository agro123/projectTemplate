import React, {useMemo} from 'react';

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
  radio?: boolean;
  onPress: (isChecked: boolean) => void;
  textNode?: React.ReactNode;
}

const CheckBox: React.FC<Props> = props => {
  const styles = useStyles(Colors);
  const {
    text,
    onPress,
    disabled,
    value,
    testID,
    textNode,
    mt,
    mv,
    size,
    radio,
  } = props;
  //const [checked, setChecked] = useState(value);

  const propStyles = useMemo(
    () => ({marginTop: mt, marginVertical: mv}),
    [mv, mt],
  );
  const newSize = size
    ? {
        width: size,
        height: size,
      }
    : null;

  const radioStyle = radio ? {borderRadius: 50} : null;

  const onCheck = () => {
    //setChecked(!checked);
    onPress(!value);
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
          disabled ? styles.disabled : value ? styles.checked : styles.unCheck,
          styles.checkBox,
          newSize,
          radioStyle,
        ]}
      />
      <View style={{width: '90%'}}>
        {text && <Text style={styles.text}>{text}</Text>}
        {textNode && textNode}
      </View>
    </Pressable>
  );
};

export default CheckBox;
