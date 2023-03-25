import React, { FormEvent } from 'react';

import {
  List,
  Switcher,
  FileInput,
  Select,
  Textarea,
  FormErrorMessage,
  Input,
  FormLabel,
  FormControl,
  Checkbox,
} from '~/components';

import { EventFormData, Event } from '../../types';
import { ControlName } from '../../consts/control-name';
import { parseFormData } from '../../utils/parceFormData';

interface EventFormProps {
  onSubmit: (data: Event) => void;
}

interface EventFormState {
  isDirty: boolean;
}

const options = [
  { value: 'conference', name: 'Conference' },
  { value: 'seminar', name: 'Seminar' },
  { value: 'workshop', name: 'Workshop' },
  { value: 'concert', name: 'Concert' },
  { value: 'exhibition', name: 'Exhibition' },
];

class EventForm extends React.Component<EventFormProps, EventFormState> {
  constructor(props: EventFormProps) {
    super(props);
    this.state = { isDirty: false };
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.setState((state) => ({ ...state, isDirty: true }));
    const form = e.currentTarget;

    if (form.checkValidity()) {
      const data = Object.fromEntries(new FormData(form)) as unknown as EventFormData;
      console.log(data);

      const event = parseFormData(data);

      this.props.onSubmit(event);

      this.setState((state) => ({ ...state, isDirty: false }));
      form.reset();
    }
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        noValidate
        autoComplete="off"
        className={`group ${this.state.isDirty ? 'is-dirty' : ''}`}
      >
        <div className="shadow rounded-lg overflow-hidden">
          <div className="bg-white px-4 py-5 sm:p-6">
            {/* Title Form Control starts*/}
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                id="title"
                name={ControlName.title}
                required
                minLength={4}
                maxLength={24}
                placeholder="Enter Event Title"
              />
              <FormErrorMessage>
                Please provide the event name. (4-24 chars length)
              </FormErrorMessage>
            </FormControl>

            {/* Description Form Control starts*/}
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                id="description"
                name={ControlName.description}
                rows={2}
                placeholder="Provide description of the event"
                required
              />
              <FormErrorMessage>Provide simple description</FormErrorMessage>
            </FormControl>

            {/* Date Form Controls starts*/}
            <FormControl>
              <FormLabel htmlFor="date">Date</FormLabel>
              <Input type="datetime-local" id="date" name={ControlName.date} required />
              <FormErrorMessage>Select Event Date</FormErrorMessage>
            </FormControl>

            {/* Type Form Control starts*/}
            <FormControl>
              <FormLabel htmlFor="type">Event Type</FormLabel>
              <Select id="type" name={ControlName.type} required>
                <List
                  items={options}
                  fn={({ value, name }) => (
                    <option key={value} value={value}>
                      {name}
                    </option>
                  )}
                />
              </Select>
              <FormErrorMessage>Provide type of Event</FormErrorMessage>
            </FormControl>

            {/* Radio File Form Control starts*/}

            <FormControl>
              <FormLabel>Additional Information</FormLabel>
              <Switcher label="Free" name={ControlName.isFree} />
              <div className="flex flex-col gap-y-2 ml-1">
                <div className="flex items-center gap-x-2">
                  <Checkbox id="gifts" name={ControlName.makeGifts} />
                  <FormLabel htmlFor="gifts">Gifts</FormLabel>
                </div>
                <div className="flex items-center gap-x-2">
                  <Checkbox id="open-sky" name={ControlName.isOpenSky} />
                  <FormLabel htmlFor="open-sky">Open Sky</FormLabel>
                </div>
              </div>
            </FormControl>

            {/* Image File Form Control starts*/}

            <FormControl>
              <FileInput name={ControlName.image} required />
              <FormErrorMessage>Provide image for the Event</FormErrorMessage>
            </FormControl>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default EventForm;
