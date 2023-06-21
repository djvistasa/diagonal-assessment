import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { act } from 'react-test-renderer';
import NavBar from '.';
import { pages } from '../../hooks/useMovies/mockData';
import useTestComponentWithTheme from '../../hooks/useTestComponentWithTheme';

const mockFindMoviesByTitle = jest.fn();
const mockToggleSearch = jest.fn();

const mockAppContext = {
  api: {
    movies: [
      ...pages[0]['content-items'].content,
      {
        id: 70,
        name: 'Test Movie',
        'poster-image': 'poster1.jpg',
      },
    ],
    findMoviesByTitle: () => mockFindMoviesByTitle(),
    updateMovies: () => false,
  },
  ui: {
    isLoading: false,
    toggleLoader: () => false,
    toggleSearch: mockToggleSearch,
    isSearchActive: true,
  },
};

describe('Nav bar', () => {
  const componentWithTheme = useTestComponentWithTheme(mockAppContext);

  const { getByTestId } = componentWithTheme(
    <NavBar options={{ title: 'Hello' }} />,
  );

  const searchButton = getByTestId('search-button');

  act(() => {
    fireEvent.press(searchButton);
  });

  describe('when a user searches for a movie that is on the list', () => {
    const searchField = getByTestId('search-field');

    it('should show the search field', () => {
      expect(searchField).toBeTruthy();
      expect(mockToggleSearch).toHaveBeenCalledTimes(1);
    });

    act(() => {
      fireEvent.changeText(searchField, 'Test Movie');
    });

    it('should call the findMoviesByTitle function', () => {
      expect(mockFindMoviesByTitle).toHaveBeenCalled();
    });
  });
});
