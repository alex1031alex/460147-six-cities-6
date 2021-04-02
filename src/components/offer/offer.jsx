import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {cardTypePropType, offerPropType} from '../../prop-types';
import {CardType} from '../../const';
import {getCardClassName, getImageSize} from '../../services/common';

import BookmarkButton from '../bookmark-button/bookmark-button';

const Offer = (props) => {
  const {offer, cardType, onMouseEnter, onMouseLeave} = props;
  const {images, price, isFavorite, rating, title, type, id} = offer;
  const image = images[0];

  return (
    <article
      className={`${getCardClassName(cardType)} place-card`}
      onMouseEnter={() => onMouseEnter(offer)}
      onMouseLeave={() => onMouseLeave()}
    >
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={image}
            alt="Place image"
            width={getImageSize(cardType).width}
            height={getImageSize(cardType).height}
          />
        </a>
      </div>
      <div
        className={cn({
          'place-card__info': true,
          'favorites__card-info': cardType === CardType.FAVORITE,
        })}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton
            isFavorite={isFavorite}
            parentClassName={`place-card__bookmark-button`}
            id={+id}
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
          </BookmarkButton>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Offer.defaultProps = {
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};

Offer.propTypes = {
  offer: offerPropType.isRequired,
  cardType: cardTypePropType,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Offer;
