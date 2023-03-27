import React, { PropsWithChildren } from 'react';

const FormControl: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="group/control flex flex-col gap-y-1.5 py-1.5">{children}</div>;
};

export default FormControl;
