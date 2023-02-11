import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowDown: React.FC<SvgProps> = props => (
  <Svg
    width={props.width || 15}
    height={props.height || 9}
    viewBox="0 0 15 9"
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.95368 8.04632L0.463064 1.57418C0.112221 1.19564 0.112221 0.623209 0.463064 0.263132C0.813909 -0.0877115 1.41403 -0.0877115 1.77411 0.263132L7.59997 6.08898L13.4258 0.263133C13.8044 -0.087711 14.3768 -0.0877109 14.7369 0.263133C15.0877 0.613976 15.0877 1.19564 14.7369 1.57418L8.26472 8.04632C7.88618 8.39717 7.31375 8.39717 6.95368 8.04632Z"
      fill="#696979"
    />
  </Svg>
);

export default ArrowDown;
