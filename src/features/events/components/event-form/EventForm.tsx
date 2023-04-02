import React, { FC } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

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
import { parseFormData } from '../../utils/parseFormData';

type EventFormProps = {
  onSubmit: (data: Event) => void;
};

const options = [
  { value: 'conference', name: 'Conference' },
  { value: 'seminar', name: 'Seminar' },
  { value: 'workshop', name: 'Workshop' },
  { value: 'concert', name: 'Concert' },
  { value: 'exhibition', name: 'Exhibition' },
];

const EventForm: FC<EventFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventFormData>();

  const submit: SubmitHandler<EventFormData> = (data) => {
    onSubmit(parseFormData(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} noValidate autoComplete="off">
      <div className="shadow rounded-lg overflow-hidden">
        <div className="bg-white px-4 py-5 sm:p-6">
          {/* Title Form Control starts*/}
          <FormControl>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              placeholder="Enter Event Title"
              {...register('title', { required: true, minLength: 4, maxLength: 24 })}
            />
            {errors.title && (
              <FormErrorMessage>
                Please provide the event name. (4-24 chars length)
              </FormErrorMessage>
            )}
          </FormControl>

          {/* Description Form Control starts*/}
          <FormControl>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
              id="description"
              rows={2}
              placeholder="Provide description of the event"
              {...register('description', { required: true })}
            />
            {errors.description && <FormErrorMessage>Provide simple description</FormErrorMessage>}
          </FormControl>

          {/* Date Form Controls starts*/}
          <FormControl>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input type="datetime-local" id="date" {...register('date', { required: true })} />
            {errors.date && <FormErrorMessage>Select Event Date</FormErrorMessage>}
          </FormControl>

          {/* Type Form Control starts*/}
          <FormControl>
            <FormLabel htmlFor="type">Event Type</FormLabel>
            <Select id="type" {...register('type', { required: true })}>
              <List
                items={options}
                fn={({ value, name }) => (
                  <option key={value} value={value}>
                    {name}
                  </option>
                )}
              />
            </Select>
            {errors.type && <FormErrorMessage>Provide type of Event</FormErrorMessage>}
          </FormControl>

          {/* Radio File Form Control starts*/}

          <FormControl>
            <FormLabel>Additional Information</FormLabel>
            <Switcher label="Free" {...register('isFree')} />
            <div className="flex flex-col gap-y-2 ml-1">
              <div className="flex items-center gap-x-2">
                <Checkbox id="gifts" {...register('makeGifts')} />
                <FormLabel htmlFor="gifts">Gifts</FormLabel>
              </div>
              <div className="flex items-center gap-x-2">
                <Checkbox id="open-sky" {...register('isOpenSky')} />
                <FormLabel htmlFor="open-sky">Open Sky</FormLabel>
              </div>
            </div>
          </FormControl>

          {/* Image File Form Control starts*/}

          <FormControl>
            <FileInput {...register('image', { required: true })} />
            {errors.image && <FormErrorMessage>Provide image for the Event</FormErrorMessage>}
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
};

export default EventForm;
