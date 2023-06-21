import React from 'react';
import Movie from '.';
import useTestComponentWithTheme from '../../hooks/useTestComponentWithTheme';

describe('Movie', () => {
  const componentMountedWithTheme = useTestComponentWithTheme();

  it('should render a movies', () => {
    const { getByTestId } = componentMountedWithTheme(
      <Movie name="" image="" />,
    );
    const movie = getByTestId('movie');

    expect(movie).toHaveProperty('props.backgroundColor', '#000000');
  });
});
