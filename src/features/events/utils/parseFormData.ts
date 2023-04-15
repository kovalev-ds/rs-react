import { EventFormData, Event } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const parseFormData = (data: EventFormData): Event => {
  const { title, description, date, isFree, isOpenSky, makeGifts, type, image } = data;
  return {
    id: uuidv4(),
    title,
    description,
    date,
    isFree,
    isOpenSky,
    makeGifts,
    type,
    image: URL.createObjectURL(image[0]),
  };
};
