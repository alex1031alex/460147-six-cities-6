import {city} from './city';
import {changeCity} from '../action';
import {Cities} from '../../const';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(city(undefined, {})).toEqual({activeCity: Cities.PARIS});
  });

  it(`Reducer should update active city`, () => {
    const state = {
      activeCity: Cities.PARIS,
    };

    expect(city(state, changeCity(`test`))).toEqual({activeCity: `test`});
  });
});
