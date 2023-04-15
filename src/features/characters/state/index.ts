export * from './charactersApi';
export * from './searchSlice';
export * from './useFeatureState';

import { charactersApi } from './charactersApi';
import { reducer } from './searchSlice';

export const reducers = {
  [charactersApi.reducerPath]: charactersApi.reducer,
  characters: reducer,
};
