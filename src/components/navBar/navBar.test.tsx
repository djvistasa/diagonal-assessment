import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import NavBar from '.';
import useTestComponentWithTheme from '../../hooks/useTestComponentWithTheme';

describe('navBar', () => {
  const componentWithTheme = useTestComponentWithTheme();

  describe('When the user taps the search icon', () => {
    const { getByTestId } = componentWithTheme(
      <NavBar options={{ title: 'Hello' }} />,
    );

    const searchButton = getByTestId('search-button');
    fireEvent.press(searchButton);

    it('should show the search field', () => {
      const searchField = getByTestId('search-field');
      expect(searchField).toBeTruthy();
    });
  });
});

// mock the context
// open the search field
// type in the search field
// expect the context to have certain results that match the search
