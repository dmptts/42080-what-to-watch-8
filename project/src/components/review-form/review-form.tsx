import {FormEvent, useState} from 'react';
import {Rating} from '../rating/rating';

function ReviewForm (): JSX.Element {
  const STARS_COUNT = 10;
  const MIN_REVIEW_LENGTH = 50;
  const MAX_REVIEW_LENGTH = 400;

  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [isFetching, setFetchingStatus] = useState(false);

  return (
    <form action="#" className="add-review__form" onSubmit={
      (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setFetchingStatus(true);
      }
    }
    >
      <Rating
        starsCount={STARS_COUNT}
        rating={rating}
        setRating={setRating}
      />

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          disabled={isFetching}
          value={reviewText}
          onChange={(evt) => setReviewText(evt.target.value)}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={reviewText.length < MIN_REVIEW_LENGTH || reviewText.length > MAX_REVIEW_LENGTH || rating === 0 || isFetching}
          >
            Post
          </button>
        </div>

      </div>
    </form>
  );
}

export {ReviewForm};
