import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';

import { AppRoutes } from '~/routes';
import { Popup } from '~/components';
import { useLockBodyScroll } from '~/hooks';
import { useGetCharacterByIdQuery } from '~/features/characters';

const Dialog = () => {
  const navigate = useNavigate();

  const { id = '' } = useParams();

  const { data, isError } = useGetCharacterByIdQuery(id);

  if (isError) throw new Response('Not Found', { status: 404 });

  useLockBodyScroll();

  const close = () => {
    navigate('/' + AppRoutes.home);
  };

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
            </div>
            <div>
              <h2 className="font-semibold text-2xl">{data.name}</h2>
              <div className="text-gray-700 font-light">
                <div>
                  status: <span className="font-regular">{data.status}</span>
                </div>
                <div>
                  gender: <span className="font-regular">{data.gender}</span>
                </div>
                <div>
                  origin: <span className="font-regular">{data.origin.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Dialog;
