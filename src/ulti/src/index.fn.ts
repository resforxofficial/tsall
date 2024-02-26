/**
 * test or study of typescript hd function
 */
export {};

type StateSetter<T> = T | ((prevState: T) => T);

interface State<T> {
  getState: () => T;
  setState: (updater: StateSetter<T>) => void;
}

export function utilizeState<T>(initialState: T): State<T> {
  let currentState = initialState;

  const getState = () => currentState;

  const updateState = (updater: StateSetter<T>) => {
    const newState = typeof updater === 'function' ? (updater as (prevState: T) => T)(currentState) : updater;
    currentState = { ...currentState, ...newState };
  };

  return { getState, setState: updateState };
}
