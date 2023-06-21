import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { act } from 'react-test-renderer';
import Movies from '.';
import { pages } from '../../hooks/useMovies/mockData';
import useTestComponentWithTheme from '../../hooks/useTestComponentWithTheme';

jest.mock('@rneui/themed', () => ({
  Image: jest.fn(() => <></>),
}));

const mockFindMoviesByTitle = jest.fn();
const mockToggleSearch = jest.fn();

const mockMovies = [
  ...pages[0]['content-items'].content,
  {
    id: 70,
    name: 'Test Movie',
    'poster-image': 'poster1.jpg',
  },
];

const mockAppContext = {
  api: {
    movies: mockMovies,
    findMoviesByTitle: () => mockFindMoviesByTitle(),
    updateMovies: () => false,
  },
  ui: {
    isLoading: false,
    toggleLoader: () => false,
    toggleSearch: mockToggleSearch,
    isSearchActive: false,
  },
};

describe('Movies', () => {
  const componentWithTheme = useTestComponentWithTheme(mockAppContext);

  const mockOnScrollEnd = jest.fn();
  const { getByTestId } = componentWithTheme(
    <>
      <Movies onScrollEnd={mockOnScrollEnd} />
    </>,
  );

  describe('when a user reaches the end of the list', () => {
    const list = getByTestId('movies-list');

    act(() => {
      fireEvent(list, 'onEndReached');
    });

    it('should call the onScrollEnd function', () => {
      expect(mockOnScrollEnd).toHaveBeenCalled();
    });
  });
});
