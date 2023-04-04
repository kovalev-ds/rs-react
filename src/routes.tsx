import React from 'react';
import { RouteObject } from 'react-router-dom';

import { About, Events, Home, NotFound } from '~/pages';
import { MainLayout } from '~/layouts';

export const enum AppRoutes {
  home = '',
  about = 'about',
  events = 'events',
}

export const routes: RouteObject[] = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      { path: AppRoutes.home, element: <Home /> },
      { path: AppRoutes.about, element: <About /> },
      { path: AppRoutes.events, element: <Events /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
