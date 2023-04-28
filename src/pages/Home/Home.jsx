import { Container } from './Home.styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GetTrending } from '../../servises/Api/GetTrending';
import Loader from '../../components/Loader';
import MovieList from 'components/MovieList';

const Home = () => {
  const [topMovieList, setTopMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMassege, setErrorMassege] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const data = await GetTrending();

        if (!data.length) {
          setErrorMassege('There are no top-movies for today.');
          setIsLoading(false);
          return;
        } else {
          setTopMovieList(data);
        }
      } catch (error) {
        setErrorMassege('Movies loading error.');
      }
    })();

    setIsLoading(false);
  }, []);

  return (
    <Container>
      <MovieList
        movies={topMovieList}
        pageTitle={'Trending today'}
        location={location}
      />
      {isLoading && <Loader />}
      {errorMassege && <h2>{errorMassege}</h2>}
    </Container>
  );
};

export default Home;
