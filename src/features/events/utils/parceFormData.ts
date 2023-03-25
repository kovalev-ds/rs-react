import { EventFormData, Event } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const parseFormData = (data: EventFormData): Event => {
  return {
    id: uuidv4(),
    title: data.title,
    description: data.description,
    date: new Date(data.date),
    isFree: data.isFree === 'on' ? true : false,
    isOpenSky: data.isOpenSky === 'on' ? true : false,
    makeGifts: data.makeGifts === 'on' ? true : false,
    type: data.type,
    image: URL.createObjectURL(data.image),
  };
};
