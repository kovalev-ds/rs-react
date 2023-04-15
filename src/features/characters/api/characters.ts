import { request } from '~/lib';

import { API_URL } from '../consts';
import { Character, Info } from '../types';

export const findByName = (name: string) => {
  return request<{ info: Info; results: Character[] }>(API_URL, {
    search: new URLSearchParams({ name }).toString(),
  });
};

export const findById = (id: number) => {
  return request<Character>(API_URL + '/character/' + id);
};
