import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './../action';
import {Cities} from '../../const';

const initialState = {
  activeCity: Cities.PARIS,
};

const city = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.activeCity = action.payload;
  });
});

export {city};
