import { IMovie } from '../hooks/useMovies/types';

interface IProviderProps {
  children: JSX.Element;
}

interface IApiContextState {
  movies: IMovie[];
  updateMovies: (movies: IMovie[]) => void;
  findMoviesByTitle: (searchTerm: string) => void;
}

interface IUiContextState {
  isLoading: boolean;
  isSearchActive: boolean;
  toggleSearch: () => void;
  toggleLoader: () => void;
}

interface IAppContextState {
  api: IApiContextState;
  ui: IUiContextState;
}
export type {
  IApiContextState,
  IAppContextState,
  IProviderProps,
  IUiContextState,
};
