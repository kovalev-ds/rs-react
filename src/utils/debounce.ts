// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T>(func: (...args: any[]) => Promise<T>, delay = 1000) {
  let timerId: NodeJS.Timeout;

  return (...args: Parameters<typeof func>) => {
    clearTimeout(timerId);
    return new Promise<T>((resolve, reject) => {
      timerId = setTimeout(() => {
        func(...args)
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      }, delay);
    });
  };
}
