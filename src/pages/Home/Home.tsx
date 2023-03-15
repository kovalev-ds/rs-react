import React from 'react';
import SearchBar from '~/components/SearchBar';

const Home = () => {
  return (
    <div>
      <SearchBar onSearch={(term) => console.log(term)} />
      <span>Home Page</span>
    </div>
  );
};

export default Home;
