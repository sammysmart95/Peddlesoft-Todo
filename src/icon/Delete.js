import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale} from '../Scale';

export default function Delete({size = 1, color, ...props}) {
  return (
    <Svg
      width={scale(14) * size}
      height={scale(18) * size}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 0L10.5 1H14V3H0V1H3.5L4.5 0H9.5ZM1 16C1 17.1 1.90002 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6Z"
        fill={color || 'black'}
        fillOpacity="0.54"
      />
    </Svg>
  );
}
