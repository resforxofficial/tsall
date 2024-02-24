/**
 * remodeled function of react useState
 */

export {};
declare type Dispatch<A> = (value: A) => void;
declare type SetStateAction<S> = S | ((prevState: S) => S);

export declare function utilizeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
export declare function utilizeState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];