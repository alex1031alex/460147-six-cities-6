import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {CardType, AppRoute} from '../../const';

import FavoriteOffersList from '../favorite-offers-list/favorite-offers-list';
import Header from '../header/header';
import {offerPropType} from '../../prop-types';

const Favorites = (props) => {
  const {offers} = props;

  const offersByCities = offers
    .reduce((acc, offer) => {
      const {city} = offer;
      const {name} = city;

      if (acc.hasOwnProperty(name)) {
        acc[name] = [...acc[name], offer];
      } else {
        acc[name] = [];
        acc[name].push(offer);
      }

      return acc;
    }, {});

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object
                  .entries(offersByCities)
                  .map(([city, offersForCity]) => {
                    return <FavoriteOffersList
                      key={city}
                      cityName={city}
                      offers={offersForCity}
                      cardType={CardType.FAVORITE}
                    />;
                  })
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired
};

export default Favorites;
