import {favorites} from './favorites';
import {loadFavorites} from '../action';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(favorites(undefined, {}))
      .toEqual({
        favorites: [],
        isOffersLoaded: false,
      });
  });

  it(`Reducer should load favorite offers`, () => {
    const state = {
      favorites: [],
      isOffersLoaded: false,
    };

    const testOffers = [`offer1`, `offer2`, `offer3`];

    expect(favorites(state, loadFavorites(testOffers)))
      .toEqual({
        favorites: [`offer1`, `offer2`, `offer3`],
        isOffersLoaded: true,
      });
  });
});
