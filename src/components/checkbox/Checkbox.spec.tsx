import React from 'react';

import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly with default props', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('renders correctly with custom props', () => {
    render(<Checkbox id="my-checkbox" name="my-checkbox" defaultChecked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('id', 'my-checkbox');
    expect(checkbox).toHaveAttribute('name', 'my-checkbox');
    expect(checkbox).toBeChecked();
  });
});
