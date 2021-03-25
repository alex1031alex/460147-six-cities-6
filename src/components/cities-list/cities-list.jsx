import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cn from 'classnames';

import {ActionCreator} from '../../store/action';
import {Cities} from '../../const';

const CitiesList = (props) => {
  const {activeCity, onCityChange} = props;

  const handleCityClick = (evt) => {
    evt.preventDefault();
    onCityChange(evt.target.textContent);
  };

  return <ul className="locations__list tabs__list">
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
  </ul>;
};

CitiesList.propTypes = {
  activeCity: PropTypes.string,
  onCityChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
