import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
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
import { options } from '../../consts/type-options';

type EventFormProps = {
  onSubmit: (data: Event) => void;
};

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
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Enter Event Title"
              {...register('title', { required: true, minLength: 4, maxLength: 24 })}
            />
            {errors.title && (
              <FormErrorMessage>
                Please provide the event name. (4-24 chars length)
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              rows={2}
              placeholder="Provide description of the event"
              {...register('description', { required: true })}
            />
            {errors.description && <FormErrorMessage>Provide simple description</FormErrorMessage>}
          </FormControl>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input type="datetime-local" {...register('date', { required: true })} />
            {errors.date && <FormErrorMessage>Select Event Date</FormErrorMessage>}
          </FormControl>
          <FormControl>
            <FormLabel>Event Type</FormLabel>
            <Select options={options} {...register('type', { required: true })} />
            {errors.type && <FormErrorMessage>Provide type of Event</FormErrorMessage>}
          </FormControl>
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
