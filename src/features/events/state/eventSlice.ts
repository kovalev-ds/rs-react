import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Event } from '../types';

interface EventsState {
  items: Event[];
}

const initialState: EventsState = {
  items: [],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, { payload }: PayloadAction<Event>) => {
      state.items.push(payload);
    },
  },
});

export const { addEvent } = eventsSlice.actions;
export const { reducer } = eventsSlice;
