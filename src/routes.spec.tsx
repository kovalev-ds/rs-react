import React from 'react';
import { Provider } from 'react-redux';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { routes } from './routes';
import { store } from './store';

describe('Router', () => {
  it('renders home page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    await screen.findByText('Home Page');

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('renders events page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/events'] });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    await screen.findByRole('grid');

    expect(screen.getByRole('grid')).toBeInTheDocument();
  });

  it('renders about page', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/about'],
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    await screen.findByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent('About Page');
  });

  it('renders not found page', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/not-found-page'],
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    await screen.findByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent('Not Found Page');
  });
});
