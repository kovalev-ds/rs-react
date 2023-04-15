import { useCallback, useState } from 'react';

type AsyncState<S> = {
  data: S;
  isBusy: boolean;
  error: boolean;
};

export const useAsync = <T>(initial: T) => {
  const [state, setState] = useState<AsyncState<T>>({
    data: initial,
    isBusy: false,
    error: false,
  });

  const run = useCallback(
    (fn: () => Promise<T>) => {
      setState((prev) => ({ ...prev, isBusy: true }));
      fn()
        .then((data) => {
          setState((prev) => ({ ...prev, data, isBusy: false, error: false }));
        })
        .catch(() => {
          setState((prev) => ({ ...prev, isBusy: false, error: true }));
        });
    },
    [setState]
  );

  return { run, state };
};
