import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="page">
      <h1 className="favorites__title">404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;
