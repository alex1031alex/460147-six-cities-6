import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {CardType} from '../../const.js';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offers-list/offers-list.jsx';

const MAX_PHOTO_IN_GALERY = 6;

const Room = (props) => {
  const {offer, reviews, nearbyOffers} = props;
  const {images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description} = offer;
  const {name, avatarUrl, isPro} = host;

  const galeryTemplate = images
    .slice(0, Math.min(MAX_PHOTO_IN_GALERY, images.length))
    .map((image, index) => {
      return <div className="property__image-wrapper" key={index}>
        <img className="property__image" src={image} alt="Photo studio" />
      </div>;
    });

  const goodsTemplate = goods
    .map((item, index) => {
      return (
        <li className="property__inside-item" key={index}>
          {item}
        </li>
      );
    });

  const descriptionTemplate = description
    .split(`\n`)
    .map((paragraph, index) => {
      return (
        <p className="property__text" key={index}>
          {paragraph}
        </p>
      );
    });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={`/`}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={`/login`}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {galeryTemplate}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div> : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(rating) * 20}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goodsTemplate}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={
                      `property__avatar-wrapper user__avatar-wrapper
                      ${isPro ? ` property__avatar-wrapper--pro` : ``}`
                    }
                  >
                    <img className="property__avatar user__avatar" src={avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {
                    isPro ?
                      <span className="property__user-status">
                        Pro
                      </span> : ``
                  }
                </div>
                <div className="property__description">
                  {descriptionTemplate}
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map points={nearbyOffers} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              offers={nearbyOffers}
              cardType={CardType.NEARBY}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    maxAdults: PropTypes.number.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
    }),
    goods: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
    }),
  })),
  nearbyOffers: PropTypes.array,
};

export default Room;
