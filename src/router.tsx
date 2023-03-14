import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import { About, Home, NotFound } from './pages';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
]);
