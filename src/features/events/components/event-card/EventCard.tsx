import React from 'react';
import { Event } from '../../types';
import { Badge } from '~/components';

type EventCardProps = {
  item: Event;
};

const EventCard: React.FC<EventCardProps> = ({ item }) => {
  const { title, image, description, isFree, makeGifts, isOpenSky, date, type } = item;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="relative">
        <img className="rounded-t-lg aspect-square object-cover" src={image} alt={title} />
        <span className="absolute top-0 right-0 px-3 rounded-tr-lg bg-green-500 text-white capitalize">
          {type}
        </span>
      </div>

      <div className="p-5">
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="mb-1 font-bold text-sm text-gray-700">
          {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)}
        </p>
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
