import React from 'react';
import CheckBox from '@components/CheckBox/CheckBox';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import {Text} from 'react-native';

afterEach(cleanup);

const props = {
  text: 'Example',
  testID: 'check-test',
  value: true,
  onPress: jest.fn(),
};
const propsTextNode = {
  text: 'Example',
  testID: 'check-test-textNode',
  value: true,
  onPress: jest.fn(),
  textNode: <Text>Funcionando example</Text>,
};

const setup = () => {
  const utils = render(<CheckBox {...props} />);
  const checkBox = utils.getByTestId('check-test');
  return {
    checkBox,
    ...utils,
  };
};

const setupTextNode = () => {
  const utils = render(<CheckBox {...propsTextNode} />);
  const checkBox = utils.getByTestId('check-test-textNode');
  return {
    checkBox,
    ...utils,
  };
};

describe('CheckBox component', () => {
  it('should act the onPress', async () => {
    const {checkBox} = setup();
    fireEvent(checkBox, 'onValueChange');
    expect(checkBox).toBeDefined();
  });
  it('should act the onPress text node', async () => {
    const {checkBox} = setupTextNode();
    expect(checkBox).toBeDefined();
  });
});
