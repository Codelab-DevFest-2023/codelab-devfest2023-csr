import { useParams } from 'react-router-dom';
import { useMovie } from '../../hooks/movies';
import Like from '../../components/like/Like';
import Note from '../../components/note/Note';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const {
    data: movie,
    isFetching,
    isError,
    isFetched,
    refetch,
  } = useMovie(Number(movieId));

  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  const backdropPathUrl = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;

  return (
    <div className="details-page">
      {isError && (
        <div>
          <p className="text-red mb-4">
            Erreur lors de la récupération du film ...
          </p>
          <button type="button" onClick={() => refetch()}>
            Réessayer
          </button>
        </div>
      )}
      {isFetching && <p>Chargement...</p>}
      {isFetched && movie && (
        <>
          <div className="poster">
            <img
              src={posterUrl}
              alt={movie.title}
              className="poster-image"
              height={750}
              width={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative-full">
            <img
              className="movie-backdrop"
              alt={movie.title}
              src={backdropPathUrl}
            />
            <div className="movie-description">
              <div className="informations">
                <h1 className="movie-title">{movie.title}</h1>
                <div className="movie-genre">
                  {movie.genres.map((genre) => {
                    return <p key={genre.id}>{genre.name}</p>;
                  })}
                </div>
                <p>{movie.tagline}</p>
                <p className="movie-overview">{movie.overview}</p>
                <div className="movie-note">
                  <Note note={movie.vote_average} />
                  <Like id={movie.id} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
