import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../spinner/spinner';

const MainContentContainer = (props) => {
  const {isOffersLoaded, children} = props;

  return (
    <React.Fragment>
      {isOffersLoaded ? children : <Spinner />}
    </React.Fragment>
  );
};

MainContentContainer.propTypes = {
  isOffersLoaded: PropTypes.bool,
  children: PropTypes.object,
};

const mapStateToProps = ({OFFERS}) => ({
  isOffersLoaded: OFFERS.isOffersLoaded,
});

export {MainContentContainer};
export default connect(mapStateToProps, null)(MainContentContainer);
