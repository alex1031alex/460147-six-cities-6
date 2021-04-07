import React, {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAuthStatus} from '../../store/user/selectors';
import {redirectToRoute} from '../../store/action';

import {login} from '../../store/api-actions';
import {AppRoute, AuthStatus} from '../../const';

import Header from '../header/header';

const SignIn = () => {
  const authStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  if (authStatus === AuthStatus.AUTH) {
    dispatch(redirectToRoute(AppRoute.MAIN));
  }

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={emailRef} data-testid="email" />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" ref={passwordRef} data-testid="password">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
