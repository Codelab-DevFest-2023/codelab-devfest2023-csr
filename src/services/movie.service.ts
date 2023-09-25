import { API_HEADER, DEFAULT_PARAMS, QUERY_PARAMS } from '../constants';
import axios, { AxiosResponse } from 'axios';
import { Movie } from '../interfaces/movie.interface';

const getMovies = async (): Promise<Movie[]> => {
  const queryParams = new URLSearchParams();
  queryParams.append(QUERY_PARAMS.LANGUAGE, DEFAULT_PARAMS.LANGUAGE);

  const URL = `${
    import.meta.env.VITE_API_URL
  }/movie/popular?${queryParams.toString()}`;

  return axios
    .get(`${URL}`, {
      headers: API_HEADER,
    })
    .then((response: AxiosResponse) => response.data.results);
};

const getMovieDetails = async (movieId: number): Promise<Movie> => {
  const queryParams = new URLSearchParams();
  queryParams.append(QUERY_PARAMS.LANGUAGE, DEFAULT_PARAMS.LANGUAGE);

  const URL = `${
    import.meta.env.VITE_API_URL
  }/movie/${movieId}?${queryParams.toString()}`;

  console.log('url', URL);
  return axios
    .get(`${URL}`, {
      headers: API_HEADER,
    })
    .then((response: AxiosResponse) => response.data);
};

export { getMovieDetails, getMovies };
