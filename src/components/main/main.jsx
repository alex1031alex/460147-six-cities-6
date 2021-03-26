import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cn from 'classnames';

import {CardType} from '../../const';
import {getOffersByCity, sortOffers} from '../../utils';
import {fetchOffers} from '../../store/api-actions';
import {cityPropType, offerPropType, sortTypePropType} from '../../prop-types';

import CitiesList from '../cities-list/cities-list';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import MainNoOffers from '../main-no-offers/main-no-offers';
import Sorting from '../sorting/sorting';
import Spinner from '../spinner/spinner';
import Header from '../header/header';

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
      <Header />
      <main className={cn({
        'page__main page__main--index': true,
        'page__main page__main--index-empty': !offersByCity.length,
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
  activeCity: cityPropType,
  activeSortType: sortTypePropType,
  offers: PropTypes.arrayOf(offerPropType),
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
