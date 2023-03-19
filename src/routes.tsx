import React from 'react';
import { RouteObject } from 'react-router-dom';

import { About, Home, NotFound } from '~/pages';
import { MainLayout } from '~/layouts';

export const routes: RouteObject[] = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
