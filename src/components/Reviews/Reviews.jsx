import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetReviews } from '../../servises/Api/GetReviews';
import {
  ReviewWrapper,
  ReviewItem,
  Reviewer,
  CreatedDate,
  Content,
} from './Reviews.styled';

const Reviews = () => {
  const [reviewArr, setReviewArr] = useState([]);
  const [errorMassege, setErrorMassege] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await GetReviews(movieId);

        if (data.length === 0) {
          setErrorMassege('There is no reviews for this movie.');
          return;
        } else {
          setReviewArr(data);
        }
      } catch {
        setErrorMassege('Error loading info. Please reload the page.');
      }
    })();
  }, [movieId]);

  return (
    <>
      {reviewArr !== 0 && (
        <ReviewWrapper>
          {reviewArr.map(({ id, author, content, created_at }) => (
            <ReviewItem key={id}>
              <Reviewer>Aauthor: {author}</Reviewer>
              <CreatedDate>
                {created_at.slice(0, 9).split('-').reverse().join('-')}
              </CreatedDate>
              <Content>{content}</Content>
            </ReviewItem>
          ))}
        </ReviewWrapper>
      )}
      {errorMassege && <h2>{errorMassege}</h2>}
    </>
  );
};

export default Reviews;
