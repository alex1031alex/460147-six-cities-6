import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../spinner/spinner';

const MainContentContainer = (props) => {
  const {isOffersDataLoaded, children} = props;

  return (
    <React.Fragment>
      {isOffersDataLoaded ? children : <Spinner />}
    </React.Fragment>
  );
};

MainContentContainer.propTypes = {
  isOffersDataLoaded: PropTypes.bool,
  children: PropTypes.object,
};

const mapStateToProps = ({OFFERS}) => ({
  isOffersDataLoaded: OFFERS.isOffersDataLoaded,
});

export {MainContentContainer};
export default connect(mapStateToProps, null)(MainContentContainer);
