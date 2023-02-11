import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowRight: React.FC<SvgProps> = props => (
  <Svg
    width={props.width || 7}
    height={props.height || 12}
    viewBox="0 0 7 12"
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.03474 6.78474L1.18064 11.6527C0.896729 11.9158 0.467407 11.9158 0.19735 11.6527C-0.0657832 11.3896 -0.0657832 10.9395 0.19735 10.6694L4.56674 6.30002L0.19735 1.93063C-0.0657832 1.64673 -0.0657832 1.2174 0.19735 0.947346C0.460482 0.684213 0.896729 0.684213 1.18064 0.947346L6.03474 5.80145C6.29787 6.08536 6.29787 6.51468 6.03474 6.78474Z"
      fill={props.color || '#24252E'}
    />
  </Svg>
);

export default ArrowRight;
