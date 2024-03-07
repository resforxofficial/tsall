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

interface IStateWithRollback<T> extends State<T> {
  rollback: () => void;
}

// export function utilizeRollback<T>(initialState: T): IStateWithRollback<T> {
//   let currentState = initialState;
//   let previousStates: T[] = [];

//   const getState = () => currentState;

//   const setState = (updater: StateSetter<T>) => {
//       const newState = typeof updater === 'function' ? (updater as (prevState: T) => T)(currentState) : updater;
//       previousStates.push(currentState);
//       currentState = newState;
//   };

//   const rollback = () => {
//       if (previousStates.length > 0) {
//           currentState = previousStates.pop() as T;
//       }
//   };

//   return { getState, setState, rollback };
// }

// export function utilizeRollback<T>(updater: (state: T) => T): (state: T) => T {
//   let prevState: T;
//   return (state: T) => {
//     prevState = state; // 현재 상태 저장
//     const newState = updater(state); // 상태 업데이트
//     return {
//       ...newState,
//       rollback: () => prevState
//     };
//   };
// }
