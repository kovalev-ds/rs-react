import React from 'react';
import { describe } from 'vitest';
import { screen, render } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  const item = {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    species: 'Human',
  };

  it('should render the image and name correctly', () => {
    render(<Card item={item} />);
    const imageElement = screen.getByAltText(item.name);
    const nameElement = screen.getByText(item.name);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', item.image);
    expect(nameElement).toBeInTheDocument();
  });

  it('should render the species correctly', () => {
    render(<Card item={item} />);
    const speciesElement = screen.getByText(item.species);

    expect(speciesElement).toBeInTheDocument();
  });
});
