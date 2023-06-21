/**
 *
 * Button
 *
 */

import React from 'react';
import { ActivityIndicator } from 'react-native';
import * as movieImages from '../../assets/images';
import { truncate } from '../../utils';
import { StyledMovie, StyledMovieImage, StyledMovieName } from './styles';
import { IMovieProps } from './types';

function Movie({ name, image }: IMovieProps): JSX.Element {
  return (
    <StyledMovie>
      <StyledMovieImage
        source={movieImages[image as keyof typeof movieImages]}
        PlaceholderContent={<ActivityIndicator />}
      />
      <StyledMovieName>{truncate(name, 12)}</StyledMovieName>
    </StyledMovie>
  );
}

export default Movie;
