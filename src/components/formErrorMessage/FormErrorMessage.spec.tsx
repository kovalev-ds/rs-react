import React from 'react';
import { render, screen } from '@testing-library/react';
import FormErrorMessage from './FormErrorMessage';

describe('FormErrorMessage', () => {
  it('renders the error message', () => {
    const errorMessage = 'This field is required';
    render(<FormErrorMessage>{errorMessage}</FormErrorMessage>);
    const errorMessageElement = screen.getByText(errorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });
});
