import React, { useEffect } from 'react';
import {useState} from 'react';

const ReviewForm = () => {
  const Ratings = {
    PREFECT: {
      value: 5,
      title: `perfect`,
    },
    GOOD: {
      value: 4,
      title: `good`,
    },
    NOT_BAD: {
      value: 3,
      title: `not bad`,
    },
    BAD: {
      value: 2,
      title: `bad`,
    },
    TERRIBLE: {
      value: 1,
      title: `terrible`,
    }
  };

  const [review, setReview] = useState({rating: 0, comment: ``});
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetForm();
  };

  const resetForm = () => {
    setReview({rating: 0, comment: ``});
  };

  const handleRatingChange = (evt) => {
    const {value} = evt.target;
    setReview({...review, rating: value});
  };

  const handleCommentChange = (evt) => {
    const {value} = evt.target;
    setReview({...review, comment: value});
  };

  useEffect(() => {
    setSubmitDisabled(review.rating === 0 || review.comment.length < 50);
  }, [review]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" >
        {Object.values(Ratings)
          .map(({value, title}) => {
            return <React.Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={handleRatingChange}
                checked={value === +review.rating}
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </React.Fragment>;
          })
        }

      </div>
      <textarea 
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved" 
        value={review.comment}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
