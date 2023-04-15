import React from 'react';
import { RouteObject } from 'react-router-dom';

import { About, Events, Home, NotFound, HomeDialog } from '~/pages';
import { MainLayout } from '~/layouts';

export const enum AppRoutes {
  home = '/',
  about = 'about',
  events = 'events',
}

export const routes: RouteObject[] = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            path: AppRoutes.home,
            element: <Home />,
            children: [
              {
                path: ':id',
                element: <HomeDialog />,
              },
            ],
          },
          { path: AppRoutes.about, element: <About /> },
          { path: AppRoutes.events, element: <Events /> },
        ],
      },
    ],
  },
];
