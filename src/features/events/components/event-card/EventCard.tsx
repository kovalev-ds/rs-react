import React from 'react';
import { Event } from '../../types';
import { Badge } from '~/components';

type EventCardProps = {
  item: Event;
};

const EventCard: React.FC<EventCardProps> = ({ item }) => {
  const { title, image, description, isFree, makeGifts, isOpenSky } = item;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <img className="rounded-t-lg aspect-square object-cover" src={image} alt={title} />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>

        <div className="flex">
          {isFree && <Badge variant="green" content="Free" />}
          {makeGifts && <Badge variant="yellow" content="Gifts" />}
          {isOpenSky && <Badge variant="purple" content="Open Sky" />}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
