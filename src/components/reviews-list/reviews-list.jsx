import React from 'react';
import PropTypes from 'prop-types';

import {reviewPropType} from '../../prop-types';

import Review from '../review/review';

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.length === 0 ? `` :
        reviews.map((review) => <Review key={review.id} review={review} />)}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropType),
};

export default ReviewsList;
