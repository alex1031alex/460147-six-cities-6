import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

const Header = (props) => {
  const {authInfo, authorizationStatus} = props;
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src={isUserAuthorized ? authInfo.avatarUrl : `img/logo.svg`}
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={`/favorites`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
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

const mapStateToProps = (state) => ({
  authInfo: state.authInfo,
  authorizationStatus: state.authorizationStatus,
});

Header.propTypes = {
  authInfo: PropTypes.shape({
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
  }),
  authorizationStatus: PropTypes.string.isRequired,
};

export {Header};
export default connect(mapStateToProps, null)(Header);

