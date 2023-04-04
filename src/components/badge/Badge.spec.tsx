import React from 'react';

import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Badge from './Badge';

describe('Badge', () => {
  it('renders the content correctly', () => {
    render(<Badge variant="default" content="Hello World" />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders with the correct variant', () => {
    render(<Badge variant="green" content="Hello World" />);
    expect(screen.getByText('Hello World')).toHaveClass('bg-green-100 text-green-800');
  });
});
