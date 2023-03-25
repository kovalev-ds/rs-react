import React from 'react';

import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';

const mockProduct = {
  id: 1,
  title: 'Product title',
  description: 'Product description',
  brand: 'Product brand',
  category: 'Product category',
  image: 'product-image.jpg',
  price: 100,
  rating: 4,
};

describe('Card component', () => {
  it('renders the product details', () => {
    render(<Card item={mockProduct} />);

    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.brand)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price}$`)).toBeInTheDocument();
  });
});
