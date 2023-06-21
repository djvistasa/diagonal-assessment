import React, { createContext, useCallback, useState } from 'react';
import Loader from '../components/loader';
import { IMovie } from '../hooks/useMovies/types';
import { debounce } from '../utils';
import { IApiContextState, IProviderProps, IUiContextState } from './types';

export const AppContext = createContext<{
  ui: IUiContextState;
  api: IApiContextState;
}>({
  api: {
    movies: [],
    updateMovies: () => false,
    findMoviesByTitle: () => false,
  },
  ui: {
    isSearchActive: false,
    toggleSearch: () => false,
    isLoading: false,
    toggleLoader: () => false,
  },
});

const AppContextProvider = ({ children }: IProviderProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);
  const [shouldShowLoader, setShouldShowLoader] = useState<boolean>(false);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  const updateMovies = useCallback(
    (newMovies: IMovie[]) => {
      setFilteredMovies(newMovies);
      setMovies(newMovies);
    },

    [],
  );

  const toggleLoader = useCallback(
    () => setShouldShowLoader((prevVal) => !prevVal),
    [],
  );
  const toggleSearch = useCallback(() => {
    setIsSearchActive((prevVal) => !prevVal);
  }, []);

  const findMoviesByTitle = debounce((searchTerm: string) => {
    if (searchTerm.length === 0) {
      return setFilteredMovies(movies);
    }

    const movieResults = movies?.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredMovies(movieResults);
  }, 300);

  return (
    <AppContext.Provider
      value={{
        api: {
          movies: filteredMovies,
          updateMovies,
          findMoviesByTitle,
        },
        ui: {
          toggleLoader,
          isLoading: shouldShowLoader,
          toggleSearch,
          isSearchActive,
        },
      }}
    >
      {children}
      <Loader />
    </AppContext.Provider>
  );
};

export default AppContextProvider;
