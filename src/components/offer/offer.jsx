import React from 'react';
import PropTypes from 'prop-types';
import {CardType, ImageSize} from '../../const.js';

const Offer = (props) => {
  const {offer, cardType} = props;
  const {image, price, isBookmarked, rating, title, type} = offer;

  const getCardClassName = () => {
    switch (cardType) {
      case CardType.FAVORITE: {
        return `favorites__card`;
      }
      case CardType.CITY: {
        return `cities__place-card`;
      }
    }

    return ``;
  };

  return (
    <article className={`${getCardClassName()} place-card`}>
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={image}
            alt="Place image"
            width={cardType === CardType.FAVORITE ?
              ImageSize.SMALL.width : ImageSize.STANDARD.width}
            height={cardType === CardType.FAVORITE ?
              ImageSize.SMALL.height : ImageSize.STANDARD.height}
          />
        </a>
      </div>
      <div
        className={`${cardType === CardType.FAVORITE ?
          `favorites__card-info` : ``} place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            type="button"
            className={`place-card__bookmark-button button
            ${isBookmarked ? `place-card__bookmark-button--active` : ``}`}
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">${isBookmarked ? `In` : `To`} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
    isPremium: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  cardType: PropTypes.string.isRequired,
};

export default Offer;
