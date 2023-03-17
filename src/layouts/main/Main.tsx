import React from 'react';
import { Link, Outlet } from 'react-router-dom';

type MainProps = React.PropsWithChildren;

const Main: React.FC<MainProps> = () => {
  return (
    <>
      <header className="shadow bg-white">
        <div className="container">
          <nav className="flex items-center gap-x-3 py-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>
      <main className="py-4">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Main;
