import React from 'react';
import List from './List';

type RatingProps = {
  rating: number;
};

const range = Array.from({ length: 5 });

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex item-center mt-2">
      <List
        items={range}
        fn={(_, i) =>
          i < Math.round(rating) ? (
            <svg key={i} className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ) : (
            <svg key={i} className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          )
        }
      />
    </div>
  );
};

export default Rating;
