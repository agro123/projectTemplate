import React from 'react';
import CodeInput from '../index';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

afterEach(cleanup);

const props = {
  onChange: jest.fn(),
  numberOfDigits: 6,
};

const setup = () => {
  const utils = render(<CodeInput {...props} />);
  return {
    ...utils,
  };
};

describe('CodeInput component', () => {
  it('render', async () => {
    const component = setup();
    expect(component).toBeDefined();
  });
  it('Write code', async () => {
    const {getAllByTestId} = setup();
    const allInputs = getAllByTestId('code-input');
    expect(allInputs.length).toBe(props.numberOfDigits);
    let index = 0;
    while (index < props.numberOfDigits) {
      fireEvent.changeText(allInputs[index], '1');
      index++;
    }
  });
});
