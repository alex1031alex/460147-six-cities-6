import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import CitiesList from '../cities-list/cities-list.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import MainNoOffers from '../main-no-offers/main-no-offers.jsx';
import Sorting from '../sorting/sorting.jsx';
import Spinner from '../spinner/spinner.jsx';
import {CardType} from '../../const.js';
import {getOffersByCity, sortOffers} from '../../utils.js';
import {fetchOffers} from '../../store/api-actions.js';

const Main = (props) => {
  const {activeCity, activeSortType, offers, isOffersDataLoaded, onLoadOffersData} = props;

  const offersByCity = getOffersByCity(offers, activeCity);
  const sortedOffers = sortOffers(offersByCity, activeSortType);

  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (!isOffersDataLoaded) {
      onLoadOffersData();
    }
  }, [isOffersDataLoaded]);

  const handleMouseEnter = (offer) => {
    setActiveCard(offer);
  };
  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={`/favorites`}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={cn({
        'page__main page__main--index': true,
        'page__main page__main--index-empty': !offersByCity.length
      })}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        {!isOffersDataLoaded ?
          <Spinner />
          :
          <div className="cities">
            {offersByCity.length ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersByCity.length} places to stay in {activeCity}</b>
                  <Sorting />
                  <OffersList
                    offers={sortedOffers}
                    cardType={CardType.CITY}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      city={activeCity}
                      points={offersByCity}
                      activePoint={activeCard}
                    />
                  </section>
                </div>
              </div>
              :
              <MainNoOffers city={activeCity} />
            }
          </div>
        }
      </main>
    </div>
  );
};

Main.propTypes = {
  activeCity: PropTypes.string,
  activeSortType: PropTypes.string,
  offers: PropTypes.array,
  isOffersDataLoaded: PropTypes.bool,
  onLoadOffersData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeSortType: state.activeSortType,
  offers: state.offers,
  isOffersDataLoaded: state.isOffersDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffersData() {
    dispatch(fetchOffers());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
