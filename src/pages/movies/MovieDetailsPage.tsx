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
    <div className="flex md:flex-row flex-col">
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
          <div className="poster z-10 md:order-first order-last">
            <img
              src={posterUrl}
              alt={movie.title}
              className="aspect-[2/3] object-cover h-full"
              height={750}
              width={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="description relative w-full">
            <img
              className="absolute z-0 object-cover h-full w-[inherit] brightness-50"
              alt={movie.title}
              src={backdropPathUrl}
            />
            <div className="relative flex flex-col">
              <div className="flex flex-col gap-3 ml-4 text-white mt-3">
                <h1 className="text-xl font-semibold">{movie.title}</h1>
                <div className="flex gap-2">
                  {movie.genres.map((genre) => {
                    return <p key={genre.id}>{genre.name}</p>;
                  })}
                </div>
                <p>{movie.tagline}</p>
                <p className="mt-2 mr-10">{movie.overview}</p>
                <div className="flex items-center gap-3">
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
