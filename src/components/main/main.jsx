import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import cn from 'classnames';

import {CardType} from '../../const';
import {fetchOffers} from '../../store/api-actions';
import {getActiveCity} from '../../store/city/selectors';
import {getLoadedOffersStatus, getSortedOffers} from '../../store/offers/selectors';

import CitiesList from '../cities-list/cities-list';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import Sorting from '../sorting/sorting';
import Header from '../header/header';
import MainContentContainer from '../main-content-container/main-content-container';
import MainContent from '../main-content/main-content';

const Main = () => {
  const activeCity = useSelector(getActiveCity);
  const offers = useSelector(getSortedOffers);
  const isOffersLoaded = useSelector(getLoadedOffersStatus);

  const dispatch = useDispatch();

  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (!isOffersLoaded) {
      dispatch(fetchOffers());
    }
  }, [isOffersLoaded]);

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
        'page__main page__main--index-empty': !offers.length,
      })}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <MainContentContainer>
          <MainContent isOffersAvailable={!!offers.length}>
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity}</b>
                <Sorting />
                <OffersList
                  offers={offers}
                  cardType={CardType.CITY}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={activeCity}
                    points={offers}
                    activePoint={activeCard}
                  />
                </section>
              </div>
            </div>
          </MainContent>
        </MainContentContainer>
      </main>
    </div>
  );
};

export default Main;
