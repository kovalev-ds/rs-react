import React, { PropsWithChildren } from 'react';

type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & PropsWithChildren;

const FormLabel: React.FC<FormLabelProps> = ({ children, ...rest }) => {
  return (
    <label className="block text-sm font-medium text-gray-900" {...rest}>
      {children}
    </label>
  );
};

export default FormLabel;
