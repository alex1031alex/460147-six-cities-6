import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

import {AuthStatus, CardType} from '../../const';
import {offerPropType, reviewPropType} from '../../prop-types';
import {fetchOfferById, fetchReviews, fetchNearbyOffers} from '../../store/api-actions';

import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import Spinner from '../spinner/spinner';
import Header from '../header/header';
import Host from '../host/host';
import {getAuthStatus} from '../../store/user/selectors';
import {getNearbyOffers, getOffer, getReviews} from '../../store/offers/selectors';

const MAX_PHOTO_IN_GALERY = 6;

const Room = (props) => {
  const {authStatus, offer, reviews, nearbyOffers, onLoadOfferData} = props;
  const {id} = useParams();

  useEffect(() => {
    onLoadOfferData(id);
  }, [id]);

  if (!offer) {
    return <Spinner />;
  }

  const {
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description
  } = offer;

  const isUserAuthorized = authStatus === AuthStatus.AUTH;

  const galeryTemplate = images
    .slice(0, Math.min(MAX_PHOTO_IN_GALERY, images.length))
    .map((image) => {
      return <div className="property__image-wrapper" key={image}>
        <img className="property__image" src={image} alt="Photo studio" />
      </div>;
    });

  const goodsTemplate = goods
    .map((item) => {
      return (
        <li className="property__inside-item" key={item}>
          {item}
        </li>
      );
    });

  return (
    <div className="page">
      <Header />
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
                isPremium &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
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
              <Host host={host} description={description} />
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                {isUserAuthorized && <ReviewForm id={offer.id} />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={offer.city.name}
              points={[...nearbyOffers, offer]}
              activePoint={offer}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              {(!nearbyOffers || nearbyOffers.length === 0) ?
                `` : `Other places in the neighbourhood`}
            </h2>
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
  authStatus: PropTypes.oneOf(Object.values(AuthStatus)),
  offer: offerPropType,
  reviews: PropTypes.arrayOf(reviewPropType),
  nearbyOffers: PropTypes.arrayOf(offerPropType),
  onLoadOfferData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  offer: getOffer(state),
  reviews: getReviews(state),
  nearbyOffers: getNearbyOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOfferData(id) {
    dispatch(fetchOfferById(id));
    dispatch(fetchReviews(id));
    dispatch(fetchNearbyOffers(id));
  },
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
