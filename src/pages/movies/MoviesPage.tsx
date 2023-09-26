import MovieCard from '../../components/movie/card/MovieCard';
import { useMovies } from '../../hooks/movies';

const MoviesPage = () => {
  const { data: movies, isFetching, isError, isFetched, refetch } = useMovies();
  return (
    <div className="lg:mx-44 mx-4 space-y-4 lg:pt-6 pt-14 pb-20">
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
      {
        isFetched && movies && movies?.length > 0 && (
        <ul className="movies-list grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
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

export default MoviesPage;
