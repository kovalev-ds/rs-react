import React from 'react';

import { List, Toast } from '~/components';
import { EventForm, EventCard, Event, EventEmptyCard } from '~/features/events';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface EventsProps {}

interface EventsState {
  events: Event[];
  isToastShown: boolean;
}

class Events extends React.Component<EventsProps, EventsState> {
  constructor(props: EventsProps) {
    super(props);
    this.state = { isToastShown: false, events: [] };
  }

  addEvent = (event: Event) => {
    this.setState((state) => ({ ...state, events: [...state.events, event] }));
    this.showToast();
  };

  showToast = () => {
    this.setState((state) => ({ ...state, isToastShown: true }));

    setTimeout(() => {
      this.setState((state) => ({ ...state, isToastShown: false }));
    }, 15000);
  };

  render() {
    return (
      <div className="relative overflow-hidden">
        <div
          className={`absolute right-0 top-0 transition-transform duration-300 ${
            this.state.isToastShown ? 'translate-x-0' : 'translate-x-[150%]'
          }`}
        >
          <Toast content="The event was successfully created!" />
        </div>

        <div className="grid grid-cols-[4fr,7fr] gap-x-6">
          <EventForm onSubmit={this.addEvent} />
          {this.state.events.length ? (
            <div className="grid grid-cols-3 auto-rows-min gap-2">
              <List
                items={this.state.events}
                fn={(item) => <EventCard key={item.id} item={item} />}
              />
            </div>
          ) : (
            <EventEmptyCard />
          )}
        </div>
      </div>
    );
  }
}

export default Events;
