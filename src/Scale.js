import {Platform} from 'react-native';
import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

const guidelineWidth = Platform.isPad ? 560 : 360;
const guidelineBaseHeight = Platform.isPad ? 840 : 640;

export const scale = (size) => (width / guidelineWidth) * size;
export const scaleVertical = (size) => (height / guidelineBaseHeight) * size;
