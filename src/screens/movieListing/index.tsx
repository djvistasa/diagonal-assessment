/**
 *
 * Stores
 *
 */
import React, { useEffect, useState } from 'react';
import ApplicationWrapper from '../../components/applicationWrapper';
import Movies from '../../components/movies';
import useMovies from '../../hooks/useMovies';

function MovieListing(): JSX.Element {
  const { getMoviesPage } = useMovies();
  const [activePage, setActivePage] = useState(1);

  const getNextPage = () => {
    setActivePage(activePage + 1);
  };

  useEffect(() => {
    getMoviesPage(activePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  return (
    <ApplicationWrapper hasPadding>
      <Movies onScrollEnd={getNextPage} />
    </ApplicationWrapper>
  );
}

export default MovieListing;
