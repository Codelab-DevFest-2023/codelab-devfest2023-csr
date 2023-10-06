import { Link } from 'react-router-dom';
import MovieCard from '../../components/movie/card/MovieCard';
import { useMovies } from '../../hooks/movies';

const MoviesListPage = () => {
  const { data: movies, isFetching, isError, isFetched, refetch } = useMovies();
  return (
    <div className="main-container">
      {isError && (
        <div>
          <p className="text-red mb-4">
            Erreur lors de la récupération des films ...
          </p>
          <button
            type="button"
            onClick={() => {
              refetch();
            }}
          >
            Réessayer
          </button>
        </div>
      )}
      {isFetching && <p>Chargement...</p>}
      {isFetched && movies && movies?.length > 0 && (
        <ul className="movies-list">
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isFetched && movies && movies.length < 1 && (
        <p className="font-medium text-3xl">Aucun résultat</p>
      )}
    </div>
  );
};

export default MoviesListPage;
