import React, {useMemo} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import useStyles from './styles';
import {Colors} from '@theme/index';

interface Props {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  type?: 'primary' | 'secondary' | 'orange' | 'danger';
  childrenLeft?: JSX.Element | React.ReactNode;
  childrenRight?: JSX.Element | React.ReactNode;
  w?: string | number; //width
  h?: string | number; //heigth
  mt?: string | number;
  mb?: string | number;
  mh?: string | number;
  mv?: string | number;
  ml?: string | number;
  mr?: string | number;
  testID?: string;
  accessibilityLabel?: string;
}

const ButtonLinear: React.FC<Props> = props => {
  const {
    onPress,
    title,
    w = '100%',
    h = 46,
    mt,
    mb,
    mh,
    mv,
    ml,
    mr,
    disabled,
    type = 'primary',
    childrenLeft,
    childrenRight,
    testID,
    accessibilityLabel,
  } = props;
  const styles = useStyles();

  const getStylePressable = {
    width: w,
    height: h,
    marginTop: mt,
    marginBottom: mb,
    marginHorizontal: mh,
    marginVertical: mv,
    marginLeft: ml,
    marginRight: mr,
  };

  const typeButton: any = useMemo(
    () => ({
      primary: {
        color: Colors.WHITE,
        borderColor: 'transparent',
        backgroundColor: Colors.SKYBLUE_500,
      },
      secondary: {
        color: Colors.SKYBLUE_700,
        borderColor: Colors.SKYBLUE_700,
        backgroundColor: 'rgba(248, 253, 255, 1)',
      },
      danger: {
        color: Colors.WHITE,
        borderColor: Colors.SEMANTIC_ERROR,
        backgroundColor: Colors.SEMANTIC_ERROR,
      },
      orange: {
        color: Colors.WHITE,
        borderColor: 'transparent',
        backgroundColor: Colors.ORANGE_700,
      },
      disabled: {
        color: Colors.GRAYSCALE_600,
        borderColor: 'transparent',
        backgroundColor: Colors.GRAYSCALE_200,
      },
    }),
    [],
  );

  return (
    <TouchableOpacity
      style={[
        styles.container,
        getStylePressable,
        typeButton[disabled ? 'disabled' : type],
      ]}
      onPress={onPress}
      testID={testID}
      disabled={disabled}>
      {childrenLeft}
      <Text
        accessibilityLabel={accessibilityLabel}
        style={[
          styles.title,
          {color: typeButton[disabled ? 'disabled' : type].color},
        ]}>
        {title}
      </Text>
      {childrenRight}
    </TouchableOpacity>
  );
};

export default ButtonLinear;
