import {combineReducers} from 'redux';
import {city} from './city/city';
import {favorites} from './favorites/favorites';
import {offers} from './offers/offers';
import {user} from './user/user';

export const NameSpace = {
  CITY: `CITY`,
  OFFERS: `OFFERS`,
  USER: `USER`,
  FAVORITES: `FAVORITES`,
};

export default combineReducers({
  [NameSpace.CITY]: city,
  [NameSpace.OFFERS]: offers,
  [NameSpace.USER]: user,
  [NameSpace.FAVORITES]: favorites,
});
