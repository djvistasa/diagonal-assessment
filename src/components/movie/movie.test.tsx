import React from 'react';
import Movie from '.';
import useTestComponentWithTheme from '../../hooks/useTestComponentWithTheme';

jest.mock('@rneui/themed', () => ({
  Image: jest.fn(() => <></>),
}));
describe('Movie', () => {
  const componentMountedWithTheme = useTestComponentWithTheme();

  it('should render correctly', () => {
    const { getByTestId } = componentMountedWithTheme(
      <Movie name="test-movie" image="" />,
    );
    const movie = getByTestId('test-movie');

    expect(movie).toBeTruthy();
  });
});
