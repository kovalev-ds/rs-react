import React from 'react';
import { RouteObject } from 'react-router-dom';

import { About, Home, NotFound, Form } from '~/pages';
import { MainLayout } from '~/layouts';

export const enum AppRoutes {
  home = '',
  about = 'about',
  form = 'form',
}

export const routes: RouteObject[] = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      { path: AppRoutes.home, element: <Home /> },
      { path: AppRoutes.about, element: <About /> },
      { path: AppRoutes.form, element: <Form /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
