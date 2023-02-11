import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Platform} from 'react-native';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import useStyles from './styles';
import {Colors} from '@theme/index';
import {CalendarIcon} from '@assets/svg';

interface Props {
  onPressPicker: () => void;
  onChangeDate: (event: any, selectedDate?: Date) => void;
  value: Date;
  showPicker: boolean;
  label: string;
  mb?: string | number;
  mt?: string | number;
  mh?: string | number;
  mv?: string | number;
  ml?: string | number;
  mr?: string | number;
  required?: boolean;
  testID?: string;
  testIDBtn?: string;
  testIDContainer?: string;
  error?: boolean;
  helperText?: string;
  minimumDate?: Date;
  maximumDate?: Date;
}

const CustomDatePicker: React.FC<Props> = props => {
  const {
    onPressPicker,
    onChangeDate,
    value,
    showPicker,
    label,
    mb,
    mt,
    mh,
    mv,
    ml,
    mr,
    required,
    testID,
    testIDBtn,
    testIDContainer,
    error,
    helperText = '',
    minimumDate = new Date(1800, 0, 1),
    maximumDate = new Date(2300, 11, 31),
  } = props;
  const [borderTextInput, setBorderTextInput] = useState(Colors.GRAYSCALE_200);
  const styles = useStyles(Colors);

  const handleFocus = () => setBorderTextInput(Colors.GRAYSCALE_200);

  useEffect(() => {
    if (error) {
      setBorderTextInput(Colors.SEMANTIC_ERROR);
    } else {
      setBorderTextInput(Colors.GRAYSCALE_200);
    }
  }, [error]);
  const onShow = () => {
    if (Platform.OS === 'android') {
      DateTimePickerAndroid.open({
        value: value,
        onChange: onChangeDate,
        mode: 'date',
        is24Hour: false,
        minimumDate,
        maximumDate,
      });
      return;
    }
    onPressPicker();
  };
  return (
    <View
      testID={testIDContainer}
      style={[
        styles.container,
        {
          marginBottom: mb,
          marginTop: mt,
          marginHorizontal: mh,
          marginVertical: mv,
          marginLeft: ml,
          marginRight: mr,
        },
      ]}>
      <View style={styles.row}>
        {required && <Text style={styles.required}>* </Text>}
        <Text style={styles.label}>{label}</Text>
      </View>
      <Pressable
        onPress={onShow}
        onPressIn={handleFocus}
        style={[styles.btnCalendar, {borderColor: borderTextInput}]}
        testID={testIDBtn}>
        <Text style={styles.value}>{format(value, 'dd/MM/yyyy')}</Text>
        <CalendarIcon style={{color: Colors.GRAYSCALE_600}} />
      </Pressable>
      {error && helperText.length > 0 && (
        <Text
          style={
            error
              ? styles.labelError
              : [styles.label, {marginTop: 4, marginBottom: 0}]
          }>
          {helperText}
        </Text>
      )}
      {showPicker && (
        <DateTimePicker
          testID={testID}
          value={value}
          mode="date"
          is24Hour={false}
          display="spinner"
          locale="es-ES"
          onChange={onChangeDate}
          textColor="black"
          maximumDate={maximumDate}
          minimumDate={minimumDate}
        />
      )}
    </View>
  );
};

export default CustomDatePicker;
