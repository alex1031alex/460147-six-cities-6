import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import {AuthStatus, AppRoute} from '../../const';

const Header = (props) => {
  const {authInfo, authStatus} = props;
  const isUserAuthorized = authStatus === AuthStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className={cn({
                'header__logo-link': true,
                'header__logo-link--active': location.pathname === AppRoute.MAIN
              })}
              to={AppRoute.MAIN}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {isUserAuthorized && authInfo.avatarUrl ?
                      <img
                        src={authInfo.avatarUrl}
                        width={20}
                        height={20}
                        alt="User avatar"
                      />
                      : ``
                    }
                  </div>
                  <span className="header__user-name user__name">
                    {isUserAuthorized ? authInfo.email : `Sign in`}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({USER}) => ({
  authInfo: USER.authInfo,
  authStatus: USER.authStatus,
});

Header.propTypes = {
  authInfo: PropTypes.shape({
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
  }),
  authStatus: PropTypes.oneOf(Object.values(AuthStatus)).isRequired,
};

export {Header};
export default connect(mapStateToProps, null)(Header);
