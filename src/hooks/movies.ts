import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Movie } from '../interfaces/movie.interface';
import { getMovieDetails, getMovies } from '../services/movie.service';

const useMovies = () => {
  return useQuery<Movie[], AxiosError>(['movies'], () => getMovies());
};

const useMovie = (movieId: number) => {
  return useQuery<Movie, AxiosError>({
    queryKey: ['movies', movieId],
    queryFn: () => getMovieDetails(movieId),
  });
};

export { useMovie, useMovies };
