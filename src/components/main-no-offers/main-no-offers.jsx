import React from 'react';
import {cityPropType} from '../../prop-types';
import {connect} from 'react-redux';

const MainNoOffers = (props) => {
  const {city} = props;

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
        </div>
      </section>
      <div className="cities__right-section" />
    </div>
  );
};

MainNoOffers.propTypes = {
  city: cityPropType,
};

const mapStateToProps = ({CITY}) => ({
  city: CITY.activeCity,
});

export {MainNoOffers};
export default connect(mapStateToProps, null)(MainNoOffers);
