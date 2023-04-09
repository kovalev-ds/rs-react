import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';

import { AppRoutes } from '~/routes';
import { Popup } from '~/components';
import { useAsync, useLockBodyScroll } from '~/hooks';
import { Character, findById } from '~/features/characters';

const Dialog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    run,
    state: { data, isBusy },
  } = useAsync<Character | null>(null);

  useEffect(() => {
    run(() => findById(Number(id)));
  }, [id, run]);

  useLockBodyScroll();

  const close = () => {
    navigate(AppRoutes.home);
  };
  console.log(data);

  return (
    <Popup isOpen={true} onClose={close}>
      {data && (
        <div className="relative max-w-xl mx-auto p-4 rounded bg-neutral-50">
          <button onClick={close} className="absolute right-3 top-3">
            <XMarkIcon className="h-5 w-5" />
          </button>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <img src={data.image} alt={data.name} />
              <div>{data.status}</div>
            </div>
            <div>
              <h2>name: {data.name}</h2>
              <div>gender: {data.gender}</div>
              <div>origin: {data.origin.name}</div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Dialog;
