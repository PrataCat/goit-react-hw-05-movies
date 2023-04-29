import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard/MovieCard';
import { TopMovies } from './MovieList.styled';

const MovieList = ({ movies, pageTitle }) => {
  return (
    <section>
      <h2>{pageTitle}</h2>
      <TopMovies>
        {movies.map(movie => {
          const { id, poster_path, title } = movie;
          return (
            <MovieCard
              key={id}
              posterImg={poster_path}
              title={title}
              movieId={id}
            />
          );
        })}
      </TopMovies>
    </section>
  );
};

MovieCard.propTypes = {
  movies: PropTypes.array,
  pageTitle: PropTypes.string,
};

export default MovieList;
