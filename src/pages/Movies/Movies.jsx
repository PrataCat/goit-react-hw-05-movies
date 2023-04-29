import { useEffect, useState } from 'react';
import {
  useLocalStorageMovies,
  useLocalStorageKeyword,
} from '../../hooks/useLocalStorage';
import { useLocation } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MovieList';
import Loader from '../../components/Loader';
import GetMovies from '../../servises/Api/GetMovies';
import { Container } from './Movies.styled';

const Movies = () => {
  const [keyWord, setKeyWord] = useLocalStorageKeyword('');
  const [moviesArr, setMoviesArr] = useLocalStorageMovies([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMassege, setErrorMassege] = useState(null);

  const location = useLocation();

  const changeKeyWord = value => {
    setKeyWord(value);
  };

  useEffect(() => {
    if (!keyWord) {
      return;
    }

    setIsLoading(true);

    (async () => {
      try {
        const data = await GetMovies(keyWord);

        if (data.length === 0) {
          setErrorMassege('There are no movies for this request.');
          setMoviesArr([]);
          setIsLoading(false);
          return;
        } else {
          setMoviesArr(data);
          setIsLoading(false);
        }
      } catch {
        setErrorMassege('Movies loading error.');
      }

      setIsLoading(false);
    })();
  }, [keyWord, setMoviesArr]);

  return (
    <section>
      <SearchBar changeKeyWord={changeKeyWord} />
      <Container>
        {moviesArr.length !== 0 && (
          <MovieList
            movies={moviesArr}
            pageTitle={`Found movies with "${keyWord}"`}
            location={location}
          />
        )}
        {isLoading && <Loader />}
        {errorMassege && <h2>{errorMassege}</h2>}
      </Container>
    </section>
  );
};

export default Movies;
