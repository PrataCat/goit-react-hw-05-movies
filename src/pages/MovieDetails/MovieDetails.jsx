import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import { GetMovieDetails } from '../../servises/Api/GetMovieDetails';
import Loader from '../../components/Loader';
import {
  BackBtn,
  MainData,
  MovieImg,
  InfoWrapper,
  Title,
  SubTitle,
  Text,
  AddData,
  AddDataItem,
  AddDataLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMassege, setErrorMassege] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const { poster_path, title, release_date, overview, genres, vote_average } =
    movieData;

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const data = await GetMovieDetails(movieId);

        if (data.length === 0) {
          setMovieData([]);
          setIsLoading(false);
          setErrorMassege('There is no description for this movie.');
          return;
        } else {
          setMovieData(data);
        }
      } catch {
        setErrorMassege('Movie details loading error.');
      }
    })();

    setIsLoading(false);
  }, [movieId]);

  return (
    <main>
      {isLoading && <Loader />}
      {movieData.length !== 0 && (
        <>
          <BackBtn to={backLinkHref.current}>Go back</BackBtn>
          <MainData>
            <MovieImg
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
              alt={title}
            />
            <InfoWrapper>
              <Title>
                {title}(
                {release_date ? release_date.slice(0, 4) : 'Unknown date'})
              </Title>
              <Text>
                {vote_average
                  ? `User score: ${(vote_average * 10).toFixed(0)}%`
                  : 'Unknown user score'}
              </Text>
              <SubTitle>Overview:</SubTitle>
              <Text>{overview ? overview : 'There is no overview'}</Text>
              <SubTitle>Genres: </SubTitle>
              <Text>
                {genres
                  ? genres.map(genre => genre.name).join(', ')
                  : 'Unknown genre'}
              </Text>
            </InfoWrapper>
          </MainData>
          <AddData>
            <AddDataItem>
              <SubTitle>Additional information</SubTitle>
            </AddDataItem>
            <AddDataItem>
              <AddDataLink to="cast">Cast</AddDataLink>
              <AddDataLink to="reviews">Reviews</AddDataLink>
            </AddDataItem>
          </AddData>
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {errorMassege && <h2>{errorMassege}</h2>}
    </main>
  );
};

export default MovieDetails;
