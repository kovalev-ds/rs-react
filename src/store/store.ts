import { configureStore } from '@reduxjs/toolkit';
import { charactersApi, reducers as characterReducers } from '~/features/characters';
import { reducers as eventsReducers } from '~/features/events';

export const store = configureStore({
  reducer: { ...characterReducers, ...eventsReducers },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
