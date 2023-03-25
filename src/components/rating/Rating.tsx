import React from 'react';
import StarIconOutline from '@heroicons/react/24/outline/StarIcon';
import StarIconSolid from '@heroicons/react/24/solid/StarIcon';

import List from '../list/List';

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
            <StarIconSolid key={i} data-testid="filled-star" className="w-5 h-5 text-gray-700" />
          ) : (
            <StarIconOutline key={i} data-testid="empty-star" className="w-5 h-5 text-gray-700" />
          )
        }
      />
    </div>
  );
};

export default Rating;
