import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import cn from 'classnames';

import {getActiveCity} from '../../store/city/selectors';
import {changeCity} from '../../store/action';
import {Cities} from '../../const';

const CitiesList = () => {
  const activeCity = useSelector(getActiveCity);
  const dispatch = useDispatch();

  const handleCityClick = (evt) => {
    evt.preventDefault();
    dispatch(changeCity(evt.target.textContent));
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

export default CitiesList;
