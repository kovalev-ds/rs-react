import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const onSearchMock = vi.fn();

  it('should render properly', () => {
    render(<SearchBar search="" onSearch={onSearchMock} isBusy={false} />);

    expect(screen.getByLabelText('Quick Search')).toBeInTheDocument();
  });

  it('should call onSearch with the entered value when the input changes', () => {
    render(<SearchBar search="" onSearch={onSearchMock} isBusy={false} />);

    fireEvent.change(screen.getByLabelText('Quick Search'), { target: { value: 'test' } });

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith('test');
  });

  it('should display the loading icon when isBusy is true', async () => {
    render(<SearchBar search="" onSearch={onSearchMock} isBusy={true} />);

    expect(screen.getByTestId('spin')).toBeInTheDocument();
  });

  it('should display the magnifying glass icon when isBusy is false', () => {
    render(<SearchBar search="" onSearch={onSearchMock} isBusy={false} />);

    expect(screen.queryByTestId('spin')).not.toBeInTheDocument();
  });
});
