import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const horizontal = {
  small: width * 0.0375,
  medium: width * 0.05,
  large: width * 0.075,
};

export const vertical = {
  small: height * 0.0375,
  medium: height * 0.05,
  normal: height * 0.065,
  large: height * 0.075,
};
