import React from 'react';

type RadioProps = React.InputHTMLAttributes<HTMLInputElement>;

const Radio: React.FC<RadioProps> = ({ ...rest }) => {
  return (
    <input
      type="radio"
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      {...rest}
    />
  );
};

export default Radio;
