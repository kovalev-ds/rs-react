import { Event } from '../types';

export const ControlName: Record<keyof Event, keyof Event> = {
  id: 'id',
  title: 'title',
  description: 'description',
  date: 'date',
  isFree: 'isFree',
  type: 'type',
  image: 'image',
  isOpenSky: 'isOpenSky',
  makeGifts: 'makeGifts',
};
