import React from 'react';
import Loader from 'react-loader-spinner';

const SpinnerSize = {
  WIDTH: 100,
  HEIGHT: 100
};

const Spinner = () => {
  return (
    <div className="container">
      <Loader
        type="Oval"
        width={SpinnerSize.WIDTH}
        height={SpinnerSize.HEIGHT}
        color="#4481c3"
      />
    </div>
  );
};

export default Spinner;
