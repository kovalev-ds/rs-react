import React, { PropsWithChildren } from 'react';

type FormErrorMessageProps = React.HTMLAttributes<HTMLSpanElement> & PropsWithChildren;

const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ children }) => {
  return (
    <span
      className={`hidden group-[.is-dirty]:group-[:has(:invalid)]/control:block text-red-700 font-light text-sm`}
    >
      {children}
    </span>
  );
};

export default FormErrorMessage;
