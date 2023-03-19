import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

type MainProps = React.PropsWithChildren;

const Main: React.FC<MainProps> = () => {
  return (
    <>
      <header className="shadow bg-white">
        <div className="container">
          <nav className="flex items-center gap-x-3 py-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
              About
            </NavLink>
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
