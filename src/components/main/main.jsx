import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import {ActionCreator} from '../../store/action.js';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import {CardType, Cities} from '../../const.js';


const Main = (props) => {
  const {activeCity, offersByCity, onCityChange} = props;

  const handleCityClick = (evt) => {
    evt.preventDefault();
    onCityChange(evt.target.textContent);
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.values(Cities).map((city) => {
                return <li key={city} className="locations__item">
                  <a className={cn({
                    'locations__item-link tabs__item': true,
                    'tabs__item--active': city === activeCity
                  })} onClick={handleCityClick} href="#">
                    <span>{city}</span>
                  </a>
                </li>;
              })}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList
                offers={offersByCity}
                cardType={CardType.CITY}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  points={offersByCity}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  activeCity: PropTypes.string,
  offersByCity: PropTypes.array,
  onCityChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offersByCity: state.offersByCity
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.setOffersByCity());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
