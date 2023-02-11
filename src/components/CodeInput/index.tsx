import React, {FC, useState, useRef, useMemo} from 'react';
import {View, TextInput, StyleProp, TextStyle} from 'react-native';
import useStyle from './styles';

interface Props {
  numberOfDigits: number;
  onChange: (text: string) => void;
  boxDigitStyle?: StyleProp<TextStyle>;
  mb?: number | string;
  mt?: number | string;
  mh?: number | string;
  mv?: number | string;
  ml?: number | string;
  mr?: number | string;
  w?: number | string;
}

const CodeInput: FC<Props> = props => {
  const {
    numberOfDigits,
    onChange,
    boxDigitStyle,
    mh,
    mb,
    mt,
    mv,
    ml,
    mr,
    w = 290,
  } = props;
  const DIGITS = useMemo((): string[] => {
    let arr = [];
    let p = 0;
    while (p < numberOfDigits) {
      arr.push('');
      p++;
    }
    return arr;
  }, [numberOfDigits]);
  const styles = useStyle();
  const [codeValue, setCodeValue] = useState<string[]>([...DIGITS]);
  const inputRefs = useRef<TextInput[]>([]);
  const onChangeText = (text: string, index: number) => {
    const newValue = [...codeValue];
    newValue[index] = text;
    setCodeValue(newValue);
    onChange(newValue.join(''));
    if (text !== '' && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
      return;
    }
  };

  return (
    <View
      style={[
        styles.codeInputContainer,
        {
          width: w,
          marginBottom: mb,
          marginTop: mt,
          marginHorizontal: mh,
          marginVertical: mv,
          marginLeft: ml,
          marginRight: mr,
        },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        {DIGITS.map((v, index) => (
          <TextInput
            key={index}
            ref={(element: TextInput) => {
              inputRefs.current[index] = element;
            }}
            value={codeValue[index]}
            onChangeText={text => onChangeText(text, index)}
            keyboardType="number-pad"
            returnKeyType="next"
            maxLength={1}
            style={[styles.codeDigit, boxDigitStyle]}
            testID="code-input"
          />
        ))}
      </View>
    </View>
  );
};

export default CodeInput;
