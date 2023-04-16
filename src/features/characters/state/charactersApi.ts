import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../consts';
import type { Character } from '../types';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCharactersByName: builder.query<Character[], string>({
      query: (name) => ({
        url: '/character',
        params: { name },
      }),
      transformResponse: (response: { results: Character[] }) => {
        return response.results;
      },
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id) => ({
        url: `/character/${id}`,
      }),
    }),
  }),
});

export const { useGetCharactersByNameQuery, useGetCharacterByIdQuery } = charactersApi;
