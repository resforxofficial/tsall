/**
 * test or study of typescript hd function
 */
export {};
import { produce } from 'immer';

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
    currentState = newState;
  };  

  return { getState, setState: updateState };
}

export function utilizeImmer<T>(updater: (draft: T) => T): (state: T) => T {
  return (state: T) => produce(state, updater);
}

export function utilizeReduce<T>(updater: (draft: T) => void): (state: T) => T {
  return (state: T) => produce(state, updater);
}

interface Store<T> {
  getState: () => T;
  setState: (updater: StateSetter<T>) => void;
}

export function utilizeStateAll<T extends Store<any>[]>(...stores: T): 
  { 
    getState: { [K in keyof T]: T[K]['getState'] },
    setState: { [K in keyof T]: T[K]['setState'] },
  } {
  const combinedGetState = {} as { [K in keyof T]: T[K]['getState'] };
  const combinedSetState = {} as { [K in keyof T]: T[K]['setState'] };
  
  stores.forEach((store, index) => {
    combinedGetState[index as any] = store.getState;
    combinedSetState[index as any] = store.setState;
  });

  return { getState: combinedGetState, setState: combinedSetState };
}
