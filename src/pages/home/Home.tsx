import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Character, Card, findByName, SEARCH_KEY } from '~/features/characters';
import { List, SearchBar } from '~/components';
import { useAsync, usePersistState } from '~/hooks';
import { debounce } from '~/utils';

const findByNameDebounced = debounce(findByName, 700);

const Home = () => {
  const [search, setSearch] = usePersistState<string>(SEARCH_KEY, '');

  const {
    run,
    state: { data, isBusy },
  } = useAsync<Character[]>([]);

  useEffect(() => {
    run(() => findByNameDebounced(search).then(({ results }) => results ?? []));
  }, [run, search]);

  return (
    <div>
      <h1 hidden>Home Page</h1>
      <div className="space-y-4">
        <div className="lg:max-w-sm lg:mx-auto">
          <SearchBar search={search} onSearch={setSearch} isBusy={isBusy} />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          <List
            items={data}
            fn={(item) => (
              <Link key={item.id} to={`${item.id}`}>
                <Card item={item} />
              </Link>
            )}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
