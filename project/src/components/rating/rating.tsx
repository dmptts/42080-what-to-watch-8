import React, {ChangeEvent} from 'react';

type RatingProps = {
  starsCount: number,
  rating: number,
  setRating(rating: number): void
}

function Rating({starsCount, rating, setRating}: RatingProps): JSX.Element {
  const stars: number[] = Array(starsCount).fill('').map((_, i) => i + 1);

  return (
    <div className="rating">
      <div className="rating__stars">
        {stars.reverse().map((i: number): JSX.Element => (
          <React.Fragment key={i}>
            <input
              className="rating__input"
              id={`star-${i}`} type="radio"
              name="rating"
              value={i}
              checked={i === rating}
              onChange={(evt: ChangeEvent<HTMLInputElement>) => setRating(i)}
            />
            <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export {Rating};
