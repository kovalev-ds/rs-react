import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { routes } from './routes';

describe('Router', () => {
  it('renders home page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });

    render(<RouterProvider router={router} />);

    await screen.findByText('Home Page');

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('renders events page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/events'] });

    render(<RouterProvider router={router} />);

    await screen.findByRole('grid');

    expect(screen.getByRole('grid')).toBeInTheDocument();
  });

  it('renders about page', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/about'],
    });

    render(<RouterProvider router={router} />);

    await screen.findByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent('About Page');
  });

  it('renders not found page', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/not-found-page'],
    });

    render(<RouterProvider router={router} />);

    await screen.findByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent('Not Found Page');
  });
});
