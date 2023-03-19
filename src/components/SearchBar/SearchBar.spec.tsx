import React from 'react';

import { it, describe, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const onSearchMock = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    onSearchMock.mockClear();
  });

  it('should update input value on change', () => {
    render(<SearchBar onSearch={() => {}} />);

    const searchInput = screen.getByLabelText('Quick Search');
    fireEvent.change(searchInput, { target: { value: 'react' } });

    expect(searchInput).toHaveValue('react');
  });

  it('should call onSearch with the current value of the input when the component updates', () => {
    render(<SearchBar onSearch={onSearchMock} />);
    fireEvent.change(screen.getByLabelText('Quick Search'), { target: { value: 'test value' } });
    expect(onSearchMock).toHaveBeenCalledWith('test value');
  });

  it('should set the value of the input to the value from localStorage', () => {
    localStorage.setItem('search-key-value', 'test value');

    render(<SearchBar onSearch={onSearchMock} />);

    expect(screen.getByLabelText('Quick Search')).toHaveValue('test value');
  });

  it('should update localStorage when the component unmounts', () => {
    const { unmount } = render(<SearchBar onSearch={onSearchMock} />);

    fireEvent.change(screen.getByLabelText('Quick Search'), { target: { value: 'test value' } });

    unmount();

    expect(localStorage.getItem('search-key-value')).toBe('test value');
  });
});
