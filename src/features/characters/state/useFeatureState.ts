import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setSearch as setSearchTerm } from './searchSlice';
import { useGetCharactersByNameQuery } from './charactersApi';

export const useFeatureState = () => {
  const dispatch = useAppDispatch();

  const search = useAppSelector((state) => state.characters.search);
  const setSearch = (value: string) => {
    dispatch(setSearchTerm(value));
  };

  const { data = [], isFetching } = useGetCharactersByNameQuery(search);

  return { search, setSearch, data, isLoading: isFetching };
};
