import PropTypes from 'prop-types';
import { Poster, Title } from './MovieCard.styled';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import defaultImg from '../../images/default-photo-movie-clapper.jpg';

const MovieCard = ({ movieId, posterImg, title }) => {
  const location = useLocation();
  const currLocation = location.pathname;

  return (
    <section>
      <li key={movieId}>
        <Link
          to={currLocation === '/' ? `movies/${movieId}` : `${movieId}`}
          state={{ from: location }}
        >
          <div>
            <Poster
              src={
                posterImg
                  ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${posterImg}`
                  : `${defaultImg}`
              }
              alt={title}
            />
            <Title>{title}</Title>
          </div>
        </Link>
      </li>
    </section>
  );
};

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
  posterImg: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MovieCard;
