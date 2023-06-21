import { render } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../theme';

function useTestComponentWithTheme() {
  const mountWithTheme = (children: JSX.Element) =>
    render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

  return mountWithTheme;
}

export default useTestComponentWithTheme;
