import { IMovie } from '../../hooks/useMovies/types';

interface IMoviesProps {
  movies: IMovie[];
  onScrollEnd: () => void;
}

export type { IMoviesProps };
