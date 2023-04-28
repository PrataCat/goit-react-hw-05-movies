import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetCast } from '../../servises/Api/GetCast';
import defaultPhoto from '../../images/default-photo-hands.jpg';
import { CastWrapper, CastCard, CastImg, CastName, Hero } from './Cast.styled';

const Cast = () => {
  const [castArr, setCastArr] = useState([]);
  const [errorMassege, setErrorMassege] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await GetCast(movieId);

        if (data.length === 0) {
          setErrorMassege('There is no cast description for this movie.');
          return;
        } else {
          setCastArr(data);
        }
      } catch {
        setErrorMassege('Error loading info. Please reload the page.');
      }
    })();
  }, [movieId]);

  return (
    <div>
      {castArr !== 0 && (
        <CastWrapper>
          {castArr.map(({ id, profile_path, name, character }) => (
            <CastCard key={id}>
              <CastImg
                src={
                  profile_path
                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`
                    : defaultPhoto
                }
                alt={name}
                width="154"
                height="175"
              />
              <CastName>{name ? name : ''}</CastName>
              <Hero>{character ? `Character: ${character}` : ''}</Hero>
            </CastCard>
          ))}
        </CastWrapper>
      )}
      {errorMassege && <h2>{errorMassege}</h2>}
    </div>
  );
};

export default Cast;
