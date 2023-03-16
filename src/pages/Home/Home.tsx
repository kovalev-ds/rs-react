import React from 'react';
import SearchBar from '~/components/SearchBar';

const Home = () => {
  return (
    <div>
      <SearchBar onSearch={(term) => console.log(term)} />
    </div>
  );
};

export default Home;
