import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Switcher from './Switcher';

describe('Switcher', () => {
  test('renders without errors', () => {
    render(<Switcher label="Test Label" />);
  });

  test('renders the label correctly', () => {
    render(<Switcher label="Test Label" />);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
  });

  test('changes state when clicked', () => {
    render(<Switcher label="Test Label" />);
    const checkbox = screen.getByLabelText('Test Label');

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test('forwards the ref prop correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Switcher label="Test Label" ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
