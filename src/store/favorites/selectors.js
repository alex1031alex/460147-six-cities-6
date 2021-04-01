import {NameSpace} from '../root-reducer';

export const getFavorites = (state) => state[NameSpace.FAVORITES].favorites;
export const getLoadedOffersStatus = (state) => state[NameSpace.FAVORITES].isOffersLoaded;
