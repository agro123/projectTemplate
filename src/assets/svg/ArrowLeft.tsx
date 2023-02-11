import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowLeft: React.FC<SvgProps> = props => (
  <Svg
    width={props.width || 11}
    height={props.height || 18}
    viewBox="0 0 11 18"
    fill="none"
    {...props}>
    <Path
      d="M8.01979 0.502563L0.98979 7.53257C0.32979 8.23257 0.33979 9.31257 1.00979 9.99257L8.02979 17.0426C8.73979 17.7126 9.81979 17.7026 10.4898 17.0226C11.1498 16.3626 11.1498 15.2026 10.4898 14.5426L4.70979 8.76257L10.5098 2.96257C10.8298 2.62257 10.9998 2.18256 10.9998 1.73256C10.9998 1.27257 10.8198 0.832563 10.4898 0.502563C9.81979 -0.167437 8.73979 -0.167437 8.01979 0.502563Z"
      fill={props.color || '#3A3A47'}
    />
  </Svg>
);

export default ArrowLeft;
