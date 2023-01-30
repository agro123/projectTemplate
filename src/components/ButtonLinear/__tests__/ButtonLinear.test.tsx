import React from 'react';

import {render, cleanup} from '@testing-library/react-native';

import ButtonLinear from '@components/ButtonLinear/ButtonLinear';
import {View} from 'react-native';

afterEach(cleanup);

const props = {
  onPress: jest.fn(),
  title: 'Submit',
  disabled: false,
  onlyTestPressed: false,
  childrenLeft: <View />,
  testID: 'button',
};
const propsDisabled = {
  onPress: jest.fn(),
  title: 'Submit',
  disabled: true,
  onlyTestPressed: true,
  childrenLeft: <View />,
  testID: 'button-children',
};

const setup = () => {
  const utils = render(<ButtonLinear {...props} />);
  const button = utils.getByTestId('button');
  return {
    button,
    ...utils,
  };
};
const setupDisabled = () => {
  const utils = render(<ButtonLinear {...propsDisabled} />);
  const button = utils.getByTestId('button-children');
  return {
    button,
    ...utils,
  };
};

describe('Button component', () => {
  it('should act the onPress', async () => {
    const {button} = setup();
    expect(button).toBeTruthy();
  });
  it('should act the onPress and disabled', async () => {
    const {button} = setupDisabled();
    expect(button).toBeTruthy();
  });
});
