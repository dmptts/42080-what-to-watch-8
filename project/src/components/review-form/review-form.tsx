import {useState} from 'react';

function ReviewForm (): JSX.Element {
  const MIN_REVIEW_LENGTH = 50;
  const MAX_REVIEW_LENGTH = 400;

  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [isFetching, setFetchingStatus] = useState(false);

  return (
    <form action="#" className="add-review__form" onSubmit={
      (evt: any) => { // TODO: уточнить тайпинг
        evt.preventDefault();
        setFetchingStatus(true);
      }
    }
    >
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" disabled={isFetching} checked={rating === 10} onChange={(evt) => setRating(10)} />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" disabled={isFetching} checked={rating === 9} onChange={(evt) => setRating(9)} />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" disabled={isFetching} checked={rating === 8} onChange={(evt) => setRating(8)} />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" disabled={isFetching} checked={rating === 7} onChange={(evt) => setRating(7)} />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" disabled={isFetching} checked={rating === 6} onChange={(evt) => setRating(6)} />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" disabled={isFetching} checked={rating === 5} onChange={(evt) => setRating(5)} />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" disabled={isFetching} checked={rating === 4} onChange={(evt) => setRating(4)} />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" disabled={isFetching} checked={rating === 3} onChange={(evt) => setRating(3)} />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" disabled={isFetching} checked={rating === 2} onChange={(evt) => setRating(2)} />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" disabled={isFetching} checked={rating === 1} onChange={(evt) => setRating(1)} />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

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
