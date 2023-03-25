import React from 'react';

import { List } from '~/components';
import { SearchBar, Card, products } from '~/features/products';
import { Product } from '~/types';

const Home = () => {
  return (
    <div>
      <h1 hidden>Home Page</h1>
      <div className="space-y-4">
        <div className="lg:max-w-sm lg:mx-auto">
          <SearchBar onSearch={(term) => console.log(term)} />
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          <List items={products as Product[]} fn={(item) => <Card key={item.id} item={item} />} />
        </div>
      </div>
    </div>
  );
};

export default Home;
