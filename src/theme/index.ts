import { Dimensions } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

export const theme: DefaultTheme = {
  colors: {
    primary: '#5ABFA3',
    secondary: '#324359',
    background: '#1A1E26',
    tertiary: '#3D4F73',
    quaternary: '#3D4073',
    white: '#FFFFFF',
    white80: 'rgba(255, 255, 255, 0.8)',
    black70: 'rgba(0, 0, 0, 0.7)',
  },
  fonts: {
    titilliumRegular: 'TitilliumWeb-Regular',
    titilliumLight: 'TitilliumWeb-Light',
    titilliumSemiBold: 'TitilliumWeb-SemiBold',
    titilliumBold: 'TitilliumWeb-Bold',
  },
  dimensions: {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
  },
};
