import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StyledSafeArea } from './src/components/common';
import AppContextProvider from './src/context';
import Router from './src/router';
import { theme } from './src/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <StyledSafeArea>
        <AppContextProvider>
          <Router />
        </AppContextProvider>
      </StyledSafeArea>
    </ThemeProvider>
  );
}

export default App;
