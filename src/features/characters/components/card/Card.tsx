import React, { FC } from 'react';
import { Character } from '../../types';
import { Badge } from '~/components';
import { SpeciesDictionary } from '../../consts';

type CardProps = {
  item: Pick<Character, 'image' | 'name' | 'species'>;
};

const Card: FC<CardProps> = ({ item }) => {
  const { image, name, species } = item;
  return (
    <div className="relative flex flex-col rounded overflow-hidden group">
      <img src={image} alt={name} className="h-56 rounded object-cover" />
      <div className="absolute bg-black/50 inset-x-0 bottom-0 pb-1 transition-transform translate-y-1 group-hover:translate-y-0">
        <div className="p-2 flex justify-between items-center gap-x-2">
          <span className="text-neutral-50 font-medium truncate">{name}</span>
          <Badge variant={SpeciesDictionary.get(species) ?? 'dark'} content={species} />
        </div>
      </div>
    </div>
  );
};

export default Card;
