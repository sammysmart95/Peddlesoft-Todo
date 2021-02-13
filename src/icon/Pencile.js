import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale} from '../Scale';

export default function Pencile({size = 1, color, ...props}) {
  return (
    <Svg
      width={scale(20 * size)}
      height={scale(18 * size)}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3687 0.290009L18.7087 2.63C19.0988 3.01999 19.0988 3.64999 18.7087 4.04001L16.8788 5.87L13.1288 2.12L14.9587 0.290009C15.1487 0.100006 15.3987 0 15.6588 0C15.9188 0 16.1688 0.0899963 16.3687 0.290009ZM0.998749 14.25V18H4.74875L15.8087 6.94L12.0587 3.19L0.998749 14.25ZM3.91876 16H2.99875V15.08L12.0587 6.01999L12.9788 6.94L3.91876 16Z"
        fill={color || 'black'}
        fillOpacity="0.54"
      />
    </Svg>
  );
}
