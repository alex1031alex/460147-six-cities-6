import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import {getLoadedOffersStatus} from '../../store/offers/selectors';

import Spinner from '../spinner/spinner';

const MainContentContainer = (props) => {
  const {children} = props;
  const isOffersLoaded = useSelector(getLoadedOffersStatus);

  return (
    <React.Fragment>
      {isOffersLoaded ? children : <Spinner />}
    </React.Fragment>
  );
};

MainContentContainer.propTypes = {
  children: PropTypes.object,
};

export default MainContentContainer;
