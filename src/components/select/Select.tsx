import React, { PropsWithChildren } from 'react';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & PropsWithChildren;

const Select: React.FC<SelectProps> = ({ children, className, ...rest }) => {
  return (
    <select
      className={`rounded-md border-0 bg-white py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
      {...rest}
    >
      <option value="">Select...</option>
      {children}
    </select>
  );
};

export default Select;
