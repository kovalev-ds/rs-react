import React from 'react';

import { Product } from '~/types';
import Rating from '../Rating/Rating';

type CardProps = {
  item: Product;
};

const Card: React.FC<CardProps> = ({ item }) => {
  const { title, image, brand, category, price, rating } = item;

  return (
    <div className="rounded-md shadow-lg hover:shadow-2xl bg-white border transition-shadow flex flex-col">
      <img
        className="w-full aspect-video object-cover hover:opacity-75 rounded-md transition"
        src={image}
        alt={title}
      />

      <div className="flex flex-col items-center p-3">
        <div className="text-md text-gray-400 capitalize text-center">
          <span>{brand}</span>
          <span> | </span>
          <span>{category}</span>
        </div>
        <h2 className="text-center text-lg text-orange-400 font-semibold hover:underline">
          {title}
        </h2>
        <Rating rating={rating} />
        <span className="py-2 font-bold">{price}$</span>
      </div>
    </div>
  );
};

export default Card;
