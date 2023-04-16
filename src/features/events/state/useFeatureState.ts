import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { addEvent } from './eventSlice';
import { Event } from '../types';

export const useFeatureState = () => {
  const dispatch = useAppDispatch();

  const events = useAppSelector((state) => state.events.items);

  const createEvent = (data: Event) => {
    dispatch(addEvent(data));
  };

  return { events, createEvent };
};
