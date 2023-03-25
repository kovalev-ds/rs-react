import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppRoutes } from '~/routes';

type MainProps = React.PropsWithChildren;

const Main: React.FC<MainProps> = () => {
  return (
    <>
      <header className="shadow bg-white">
        <div className="container">
          <nav className="flex items-center gap-x-3 py-4">
            <NavLink
              to={AppRoutes.home}
              className={({ isActive }) => (isActive ? 'font-bold' : '')}
            >
              Home
            </NavLink>
            <NavLink
              to={AppRoutes.events}
              className={({ isActive }) => (isActive ? 'font-bold' : '')}
            >
              Events
            </NavLink>
            <NavLink
              to={AppRoutes.about}
              className={({ isActive }) => (isActive ? 'font-bold' : '')}
            >
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
