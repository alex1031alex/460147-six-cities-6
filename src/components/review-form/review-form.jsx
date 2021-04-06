import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {sendReview} from '../../store/api-actions';

import Warning from '../warning/warning';

const COMMENT_MIN_LENGTH = 50;
const COMMENT_MAX_LENGTH = 300;
const ERROR_SHOWING_TIME = 3000;

const ReviewForm = (props) => {
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

  const {id} = props;
  const dispatch = useDispatch();

  const initialReview = {
    rating: 0,
    comment: ``,
  };

  const [review, setReview] = useState(initialReview);
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSubmitDisabled(true);
    dispatch(sendReview({id, review}))
      .then(() => {
        resetForm();
        setSubmitDisabled(false);
      })
      .catch((e) => {
        setError(e);

        setTimeout(() => {
          setError(null);
          setSubmitDisabled(false);
        }, ERROR_SHOWING_TIME);
      });
  };

  const resetForm = () => {
    setReview(initialReview);
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
    setSubmitDisabled(
        review.rating === 0 ||
        review.comment.length < COMMENT_MIN_LENGTH ||
        review.comment.length > COMMENT_MAX_LENGTH
    );
  }, [review]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" >
        {Object.values(Ratings)
          .map(({value, title}) => {
            return <React.Fragment key={title}>
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
      {error && <Warning description={error.toJSON().message} />}
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

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ReviewForm;
