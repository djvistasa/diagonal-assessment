import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      background: string;
      white: string;
      white80: string;
      black70: string;
    };
    fonts: {
      titilliumRegular: string;
      titilliumLight: string;
      titilliumSemiBold: string;
      titilliumBold: string;
    };
    dimensions: {
      screenWidth: number;
      screenHeight: number;
    };
  }
}
