import React, { createContext, useCallback, useContext, useState } from 'react';
import Loader from '../components/loader';
import { IMovie } from '../hooks/useMovies/types';
import { IProviderProps } from './types';

const AppContext = createContext<{
  isLoading: boolean;
  toggleLoader: () => void;
  movies: IMovie[];
  updateMovies: (movies: IMovie[]) => void;
  findMoviesByTitle: (searchTerm: string) => void;
}>({
  movies: [],
  isLoading: false,
  updateMovies: () => false,
  toggleLoader: () => false,
  findMoviesByTitle: () => false,
});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }: IProviderProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);
  const [shouldShowLoader, setShouldShowLoader] = useState<boolean>(false);

  const updateMovies = useCallback((newMovies: IMovie[]) => {
    setFilteredMovies(newMovies);
    setMovies(newMovies);
  }, []);

  const toggleLoader = () => setShouldShowLoader((prevVal) => !prevVal);

  const findMoviesByTitle = (searchTerm: string) => {
    if (!searchTerm) {
      return setFilteredMovies(movies);
    }

    const movieResults = movies?.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredMovies(movieResults);
  };

  return (
    <AppContext.Provider
      value={{
        movies: filteredMovies,
        updateMovies,
        findMoviesByTitle,
        toggleLoader,
        isLoading: shouldShowLoader,
      }}
    >
      {children}
      <Loader />
    </AppContext.Provider>
  );
};

export default AppContextProvider;
