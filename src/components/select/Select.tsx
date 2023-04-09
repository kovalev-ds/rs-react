import React from 'react';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: Array<{ value: string; name: string }>;
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className, ...rest }, ref) => {
    return (
      <select
        className={`rounded-md border-0 bg-white py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
        ref={ref}
        {...rest}
      >
        <option value="">Select...</option>
        {options.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;
