import { useEffect, useState } from 'react';

export function usePersistState<T>(
  key: string,
  init: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return init;
  });

  useEffect(() => {
    return () => {
      localStorage.setItem(key, JSON.stringify(value));
    };
  }, [key, value]);

  return [value, setValue];
}
