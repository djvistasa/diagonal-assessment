import { render } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { AppContext } from '../../context';
import { IAppContextState } from '../../context/types';
import { theme } from '../../theme';

function useTestComponentWithTheme(mockedContext?: IAppContextState) {
  const mountWithTheme = (children: JSX.Element) =>
    mockedContext
      ? render(
          <ThemeProvider theme={theme}>
            <AppContext.Provider value={mockedContext}>
              {children}
            </AppContext.Provider>
          </ThemeProvider>,
        )
      : render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

  return mountWithTheme;
}

export default useTestComponentWithTheme;
