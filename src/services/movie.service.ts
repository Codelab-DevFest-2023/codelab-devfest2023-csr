import { API_HEADER } from '../constants';
import axios, { AxiosResponse } from 'axios';
import { Movie } from '../interfaces/movie.interface';

const fetchPopularMovies = async (): Promise<Movie[]> => {
  const queryParams = new URLSearchParams();
  queryParams.append('language', 'fr-FR');

  const URL = `${
    import.meta.env.VITE_API_URL
  }/movie/popular?${queryParams.toString()}`;

  return axios
    .get(`${URL}`, {
      headers: API_HEADER,
    })
    .then((response: AxiosResponse) => response.data.results);
};

const fetchMovieDetails = async (movieId: number): Promise<Movie> => {
  const queryParams = new URLSearchParams();
  queryParams.append('language', 'fr-FR');

  const URL = `${
    import.meta.env.VITE_API_URL
  }/movie/${movieId}?${queryParams.toString()}`;

  return axios
    .get(`${URL}`, {
      headers: API_HEADER,
    })
    .then((response: AxiosResponse) => response.data);
};

export { fetchMovieDetails, fetchPopularMovies };
