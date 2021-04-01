import React from 'react';
import {useSelector} from 'react-redux';
import cn from 'classnames';

import {CardType} from '../../const';
import {getFavorites} from '../../store/favorites/selectors';

import FavoriteOffersList from '../favorite-offers-list/favorite-offers-list';
import Header from '../header/header';
import Footer from '../footer/footer';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

const Favorites = () => {
  const offers = useSelector(getFavorites);

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
    <div className={cn({'page': true, 'page--favorites-empty': !offers.length})}>
      <Header />
      {!offers.length ? <FavoritesEmpty/>
        :
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
      }
      <Footer />
    </div>
  );
};

export default Favorites;
