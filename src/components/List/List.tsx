import React from 'react';

type ListProps<T> = {
  items: Array<T>;
  fn: (data: T, index: number) => React.ReactElement;
};

const List = <T,>({ items, fn }: ListProps<T>) => {
  return <>{items.map(fn)}</>;
};

export default List;
