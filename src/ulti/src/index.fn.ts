/**
 * test or study of typescript hd function
 */
export {};
import { produce } from 'immer';

type StateSetter<T> = T | ((prevState: T) => T);

interface State<T> {
  getState: () => T;
  setState: (updater: StateSetter<T>) => void;
  dispatch?: (args: number) => void;
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

export function utilizeImmer<T>(updater: (draft: T) => T): (state: T) => T {
  return (state: T) => produce(state, updater);
}

export function utilizeReduce<T>(updater: (draft: T) => void): (state: T) => T {
  return (state: T) => produce(state, updater);
}

/* 상태: 보류
export function utilizeCreateStore<T>(initialState: T): State<T> {
  const { getState, setState } = utilizeState(initialState);
  
  const dispatch = (updater: (draft: T) => void) => {
    setState(prevState => {
      updater(prevState);
      return prevState;
    });
  };

  return { getState, setState, dispatch };
}
*/

interface Iinstance {
  args: number,
  dispatch: (args: number) => void
}

export function utilizeMultipleStore(...stores: any[]): any {
  const mergedState = stores.reduce((acc, store) => ({ ...acc, ...store }), {});

  const { getState, setState } = utilizeState(mergedState);

  const dispatch = (args: number) => {
      stores.forEach(store => {
          if(typeof store.dispatch === 'function') {
              store.dispatch(args);
          }
      });
  };

  return { getState, setState, dispatch };
}