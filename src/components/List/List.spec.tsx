import React from 'react';

import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('renders a list of items', () => {
    const items = ['apple', 'banana', 'orange'];

    render(
      <List items={items} fn={(item: string, index: number) => <li key={index}>{item}</li>} />
    );

    expect(screen.getByText('apple')).toBeInTheDocument();
    expect(screen.getByText('banana')).toBeInTheDocument();
    expect(screen.getByText('orange')).toBeInTheDocument();
  });
});
