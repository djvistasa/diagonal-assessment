/**
 *
 * Movies
 *
 */

import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useAppContext } from '../../context/useAppContext';
import Movie from '../movie';
import { StyledMovies } from './styles';
import { IMoviesProps } from './types';
import { removeImageExtension } from './utils';

function Movies({ onScrollEnd }: IMoviesProps): JSX.Element {
  const {
    api: { movies },
    ui: { isSearchActive },
  } = useAppContext();

  useEffect(() => {}, [movies]);
  return (
    <StyledMovies>
      <FlatList
        data={movies}
        testID="movies-list"
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
        onEndReached={() => !isSearchActive && onScrollEnd()}
        onEndReachedThreshold={0.5}
      />
    </StyledMovies>
  );
}

export default Movies;
