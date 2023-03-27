import React from 'react';

import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Rating from './Rating';

describe('Rating', () => {
  it('renders the correct number of filled stars', () => {
    const rating = 3.4;
    render(<Rating rating={rating} />);

    expect(screen.getAllByTestId('filled-star')).toHaveLength(3);
    expect(screen.getAllByTestId('empty-star')).toHaveLength(2);
  });
});
