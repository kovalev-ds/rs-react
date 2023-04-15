import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { List, SearchBar } from '~/components';
import { Card, useFeatureState } from '~/features/characters';

const Home = () => {
  const { search, setSearch, isLoading, data } = useFeatureState();

  return (
    <>
      <h1 hidden>Home Page</h1>
      <div className="space-y-4">
        <div className="lg:max-w-sm lg:mx-auto">
          <SearchBar search={search} onSearch={setSearch} isBusy={isLoading} />
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
    </>
  );
};

export default Home;
