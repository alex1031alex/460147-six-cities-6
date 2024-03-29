import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import {AuthStatus, AppRoute} from '../../const';
import {getAuthStatus, getAuthInfo} from '../../store/user/selectors';
import {logout} from '../../store/api-actions';

const Header = () => {
  const authInfo = useSelector(getAuthInfo);
  const authStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  const isUserAuthorized = authStatus === AuthStatus.AUTH;
  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    dispatch(logout());
  };

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
              {isUserAuthorized ?
                <li className="header__nav-item">
                  <a onClick={handleLogoutClick}>&nbsp;Logout</a>
                </li> : ``}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
