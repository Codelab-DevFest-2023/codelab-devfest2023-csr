import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Movie } from '../interfaces/movie.interface';
import {
  fetchMovieDetails,
  fetchPopularMovies,
} from '../services/movie.service';

const useMovies = () => {
  return useQuery<Movie[], AxiosError>({
    queryKey: ['movies'],
    queryFn: () => fetchPopularMovies(),
  });
};

const useMovie = (movieId: number) => {
  return useQuery<Movie, AxiosError>({
    queryKey: ['movies', movieId],
    queryFn: () => fetchMovieDetails(movieId),
  });
};

export { useMovie, useMovies };
