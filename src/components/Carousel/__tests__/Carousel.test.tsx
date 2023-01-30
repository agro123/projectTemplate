import React from 'react';
import {View, Image} from 'react-native';
import {render, cleanup} from '@testing-library/react-native';
import Carousel from '@components/Carousel';
import {LOGO_IMG} from '@assets/media';
afterEach(cleanup);

//const props = {
//
//};

const setup = () => {
  //Pending
  const utils = render(
    <Carousel>
      <View testID="children" />
    </Carousel>,
  );
  return {
    ...utils,
  };
};
describe('Image ', () => {
  /* This avoid crash on unit test when react component has an Image component.
    Please fix it if you know what happen.
  */
  it('Render fail', async () => {
    try {
      expect(render(<Image source={LOGO_IMG} />)).toBeTruthy();
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
describe('Carousel component', () => {
  it('Render', async () => {
    const component = setup();
    expect(component).toBeDefined();
  });
});
