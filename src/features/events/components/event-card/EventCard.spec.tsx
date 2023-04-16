import React from 'react';
import { render, screen } from '@testing-library/react';
import EventCard from './EventCard';

describe('EventCard', () => {
  const event = {
    id: '1',
    title: 'Example Event',
    description: 'Lorem ipsum dolor sit amet',
    date: new Date('2023-04-01T00:00:00Z'),
    isFree: true,
    isOpenSky: false,
    makeGifts: true,
    type: 'online',
    image: 'https://example.com/image.jpg',
  };

  it('renders the event card with all details', () => {
    render(<EventCard item={event} />);
    expect(screen.getByAltText(event.title)).toBeInTheDocument();
    expect(screen.getByText(event.title)).toBeInTheDocument();

    expect(screen.getByText(event.description)).toBeInTheDocument();
    expect(screen.getByText('Free')).toBeInTheDocument();
    expect(screen.getByText('Gifts')).toBeInTheDocument();
    expect(screen.getByText('online')).toBeInTheDocument();
  });
});
