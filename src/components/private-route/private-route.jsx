import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppRoute, AuthStatus} from '../../const';

const PrivateRoute = (props) => {
  const {render, path, exact, authStatus} = props;

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
  authStatus: PropTypes.oneOf(Object.values(AuthStatus)),
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authStatus: USER.authStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
