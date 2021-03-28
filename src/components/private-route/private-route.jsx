import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {AppRoute, AuthStatus} from '../../const';
import {getAuthStatus} from '../../store/user/selectors';

const PrivateRoute = (props) => {
  const {render, path, exact} = props;
  const authStatus = useSelector(getAuthStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authStatus === AuthStatus.AUTH ?
            render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
