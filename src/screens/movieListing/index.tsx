/**
 *
 * Stores
 *
 */
import React, { useEffect, useState } from 'react';
import ApplicationWrapper from '../../components/applicationWrapper';
import Movies from '../../components/movies';
import { useAppContext } from '../../context';
import useMovies from '../../hooks/useMovies';

function MovieListing(): JSX.Element {
  const { getMoviesPage } = useMovies();
  const [activePage, setActivePage] = useState(1);
  const { movies } = useAppContext();

  const getNextPage = () => {
    setActivePage(activePage + 1);
  };

  useEffect(() => {
    getMoviesPage(activePage);
  }, [activePage, getMoviesPage]);

  return (
    <ApplicationWrapper hasPadding>
      <Movies movies={movies} onScrollEnd={getNextPage} />
    </ApplicationWrapper>
  );
}

export default MovieListing;
