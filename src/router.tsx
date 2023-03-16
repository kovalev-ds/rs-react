import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { About, Home, NotFound } from '~/pages';
import { MainLayout } from '~/layouts';

export const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
]);
