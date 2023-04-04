import React from 'react';
import { render, screen } from '@testing-library/react';

import FormControl from './FormControl';

describe('FormControl', () => {
  it('renders its children', () => {
    const testChild = <div data-testid="test-child">Test Child</div>;
    render(<FormControl>{testChild}</FormControl>);
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });
});
