import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useAppContext } from '../../context';
import { getPage } from './api';
import { IMoviePage } from './types';

function useMovies() {
  const { updateMovies, movies, toggleLoader } = useAppContext();
  const { setOptions } = useNavigation();
  const [activePage, setActivePage] = useState<number>(0);

  const getMoviesPage = useCallback(
    async (page: number) => {
      if (page > activePage) {
        toggleLoader();

        const { error, ok, result } = await getPage(page);

        toggleLoader();

        if (error) {
          return Alert.alert('Error', `Something went wrong ${error}`);
        }

        if (ok && result) {
          const response = result as IMoviePage;

          setOptions({
            title: response.title,
          });
          updateMovies([...response['content-items'].content, ...movies]);
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
