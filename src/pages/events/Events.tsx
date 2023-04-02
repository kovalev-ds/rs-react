import React, { FC, useState } from 'react';

import { List, Toast } from '~/components';
import { EventForm, EventCard, Event, EventEmptyCard } from '~/features/events';

const Events: FC = () => {
  const [isToastShown, setIsToastShown] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);

  const addEvent = (event: Event) => {
    setEvents((prev) => [...prev, event]);
    showToast();
  };

  const showToast = () => {
    setIsToastShown(() => true);

    setTimeout(() => {
      setIsToastShown(() => false);
    }, 5000);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={`absolute z-50 right-0 top-0 transition-transform duration-300 ${
          isToastShown ? 'translate-x-0' : 'translate-x-[150%]'
        }`}
      >
        <Toast content="The event was successfully created!" />
      </div>

      <div className="grid grid-cols-[4fr,7fr] gap-x-6" role="grid">
        <EventForm onSubmit={addEvent} />
        {events.length ? (
          <div className="grid grid-cols-3 auto-rows-min gap-2">
            <List items={events} fn={(item) => <EventCard key={item.id} item={item} />} />
          </div>
        ) : (
          <EventEmptyCard />
        )}
      </div>
    </div>
  );
};

export default Events;
