export type Dispatch<A> = (value: A) => void;
export type SetStateAction<S> = S | ((prevState: S) => S);

export function utilizeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] {
    let state: S = typeof initialState === 'function' ? (initialState as () => S)() : initialState;
    
    const setState: Dispatch<SetStateAction<S>> = (newStateOrAction: SetStateAction<S>) => {
        if (typeof newStateOrAction === 'function') {
            state = (newStateOrAction as ((prevState: S) => S))(state);
        } else {
            state = newStateOrAction;
        }
        console.log(state); // 업데이트된 상태 출력
    };

    return [state, setState];
}