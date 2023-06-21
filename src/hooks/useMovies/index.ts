import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useAppContext } from '../../context/useAppContext';
import { getPage } from './api';
import { IMoviePage } from './types';

function useMovies() {
  const {
    api: { updateMovies, movies },
  } = useAppContext();
  const { setOptions } = useNavigation();
  const [activePage, setActivePage] = useState<number>(0);

  const getMoviesPage = useCallback(
    async (page: number) => {
      if (page > activePage) {
        const { error, ok, result } = await getPage(page);

        if (error) {
          return Alert.alert('Error', `Something went wrong ${error}`);
        }

        if (ok && result) {
          const response = result as IMoviePage;

          setOptions({
            title: response.title,
          });
          updateMovies([...movies, ...response['content-items'].content]);
          setActivePage(page);
        }
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activePage, setOptions, updateMovies],
  );

  return {
    getMoviesPage,
  };
}

export default useMovies;
