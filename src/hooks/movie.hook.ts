import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Movie } from '../interfaces/movie.interface';
import { getMovieDetails, getMovies } from '../services/movie.service';

const useGetMovies = () => {
  return useQuery<Movie[], AxiosError>(['MOVIES'], () => getMovies());
};

const useGetMovieDetails = (movieId: number) => {
  return useQuery<Movie, AxiosError>([`MOVIE-${movieId}`], () =>
    getMovieDetails(movieId),
  );
};

export { useGetMovieDetails, useGetMovies };
