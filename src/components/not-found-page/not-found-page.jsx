import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';

const NotFoundPage = () => {
  return (
    <div className="page page--gray">
      <div className="container">
        <h1 className="favorites__title">404. Page not found</h1>
        <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
