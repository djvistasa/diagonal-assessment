/**
 *
 * Movies
 *
 */

import React from 'react';
import { FlatList } from 'react-native';
import Movie from '../movie';
import { StyledMovies } from './styles';
import { IMoviesProps } from './types';
import { removeImageExtension } from './utils';

function Movies({ movies, onScrollEnd }: IMoviesProps): JSX.Element {
  return (
    <StyledMovies>
      <FlatList
        data={movies}
        numColumns={3}
        contentContainerStyle={{
          rowGap: 20,
        }}
        columnWrapperStyle={{ columnGap: 10 }}
        renderItem={({ item }) => (
          <Movie
            key={item.id}
            name={item.name}
            image={removeImageExtension(item['poster-image'])}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => onScrollEnd()}
        onEndReachedThreshold={0.5}
      />
    </StyledMovies>
  );
}

export default Movies;
