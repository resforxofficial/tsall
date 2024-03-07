import { utilizeImmer, utilizeReduce, utilizeState } from "../src/index.fn";

// interface MyState {
//   count: number;
//   message: string;
// }

// const initialState: MyState = {
//   count: 0,
//   message: "Hello",
// };

// const { getState, setState } = utilizeState(initialState);
// console.log(getState());

// setState(value => ({ count: value.count + 1, message: "hello world" }));
// console.log(getState()); // { count: 1, message: "hello world" }

/* 대표적인 에러 사례
interface Count {
    count: 0,
    setCount: () => void
}

const Counter: Count = {
    count: 0,
    setCount: () => {}
}

const { getState, setState } = utilizeState(Counter);
console.log(getState().count);
setState(value => ({ count: 0, setCount: () => { count: value.count + 1 } }));

console.log(getState().count);
getState().setCount();

console.log(getState().count); */



/*
interface Count {
    count: number,
    setCount: () => void
}

const Counter: Count = {
    count: 0,
    setCount: () => {}
}

const { getState, setState } = utilizeState(Counter);

setState(value => ({ 
    count: 0, 
    setCount: () => { 
        setState(prevState => ({ ...prevState, count: prevState.count + 1 })); 
    } 
}));

console.log(getState().count); // 0
getState().setCount();

console.log(getState().count); // 1
*/

/*
interface Count {
    count: number,
    setCount: () => void
}

const Counter: Count = {
    count: 0,
    setCount: () => {}
}

const { getState, setState } = utilizeState(Counter);
console.log(getState().count);

setState(value => ({ 
    ...value, 
    setCount: () => {
        setState(utilizeImmer<any>(draft => {
            draft.count += 1;
        })(value));
    } 
}));

console.log(getState().count);
getState().setCount();

console.log(getState().count);
*/

/* Success! ( or phew? succeeded! ) */

/*
interface Nested {
    deep: {
        nested: {
            obj: { count: number }
        }
    }
}

const initialState: Nested = {
    deep: {
        nested: {
            obj: {
                count: 0
            }
        }
    }
}

const { getState, setState } = utilizeState(initialState);
console.log(getState().deep.nested.obj.count);

setState(value => ({
    deep: utilizeReduce<Nested["deep"]>(draft => {
        draft.nested.obj.count = draft.nested.obj.count + 1;
    })(value.deep),
}));

console.log(getState().deep.nested.obj.count); */

/* Success! ( or phew? succeeded! ) */

// redux like patterns
/*
const types = { inc: "increase", dec: "decrease" };

const reducer = (state: any, { type, by = 1 }: { type: any, by: number }) => {
    switch(type) {
        case types.inc:
            return { grumps: state.grumps + by };
        case types.dec:
            return { grumps: state.grumps - by };
        default:
            return state;
    }
}

interface IinitialState {
    grumps: number,
    dispatch: (args: any) => void
}

const initialState: IinitialState = {
    grumps: 0,
    dispatch: (action) => {}
}

const { getState, setState } = utilizeState(initialState);
console.log(getState().grumps);

setState(value => ({
    grumps: 0,
    dispatch: (action) => {
        setState(state => reducer(state, action));
    }
}));

getState().dispatch({ type: types.inc, by: 2 });
console.log(getState().grumps);
*/

/* Success! ( or phew? succeeded! ) */

/*
/* ex.1) create people controller (succeeded) */
// interface IPerson {
//     name: string,
//     age: number,
//     dispatch: (args: string, arg2: number) => void,
//     reset: () => void
// }

// const Person: IPerson = {
//     name: "kim",
//     age: 15,
//     dispatch: (action, action2) => {},
//     reset: () => {}
// }

// const { getState, setState } = utilizeState(Person);
// console.log(`name: ${getState().name}   age: ${getState().age}`);

// setState(value => ({
//     name: "kim",
//     age: 15,
//     dispatch: (a, b) => {
//         setState(prev => ({ ...prev, name: a ? a : "", age: b ? b: 0 }));
//     },
//     reset: () => { setState(Person) }
// }));

// getState().dispatch("james", 20);
// console.log(`name: ${getState().name}   age: ${getState().age}`);

// getState().reset();
// console.log(`name: ${getState().name}   age: ${getState().age}`);

/* no store actions */
// type Iinter = { args: number; };

// const inter: Iinter = {
//     args: 0
// }

// const { getState, setState } = utilizeState(inter);
// console.log(getState().args);

// setState(value => ({
//     args: 0
// }));

/* 어쩔 수가 없음 */

/* reset state test (down) */
/* here */

/* auto creating stores */ // 에러 사레 (자동상태make기)
// interface UtilizeStateResult<T> {
//     getState: () => T;
//     setState: (newState: T | ((prevState: T) => T)) => void;
// }

// interface IStore {
//     autoCreateStore: <T>(f: T) => UtilizeStateResult<T>;
// }

// const Store: IStore = {
//     autoCreateStore: (f) => {
//         if (!f) {
//             throw new Error("Invalid argument");
//         }
//         const { getState, setState } = utilizeState(f);
//         return { getState, setState };
//     }
// }

// const { getStoreState, setStoreState } = utilizeState(Store);

// setStoreState(value => ({
//     autoCreateStore: (f) => {
//         const { getState, setState } = utilizeState(f ? f : "Invalid argument");
//         return { getState, setState };
//     },
// }));

// interface Iinstance {
//     arg: number,
//     dispatch: (args: number) => void
// }

// const instanceStore: Iinstance = {
//     arg: 0,
//     dispatch: (args) => {}
// }

// const { getInstanceState, setInstanceState } = getStoreState().autoCreateStore(instanceStore);

// interface Iinstance {
//     args: number,
//     dispatch: (args: number) => void
// }

// const instanceStore: Iinstance = {
//     args: 0,
//     dispatch: (args) => {}
// };

// const { getState, setState } = utilizeState(instanceStore);

// setState(value => ({
//     args: 0,
//     dispatch: (f) => utilizeCreateStore<any>(draft => {
//         draft.args += 1
//     })
// }));

// const { get, set } = utilizeState(first);
// 보류

// const types = { inc: "increase", dec: "decrease" }; 개빠르게 성공

// const reducer = (state: any, { type, by = 1 }: { type: any, by: number }) => {
//     switch(type) {
//         case types.inc:
//             return { grumps: state.grumps + by };
//         case types.dec:
//             return { grumps: state.grumps - by };
//         default:
//             return state;
//     }
// }

// interface IinitialState {
//     grumps: number,
//     dispatch: (args: any) => void,
//     reset: () => void
// }

// const initialState: IinitialState = {
//     grumps: 0,
//     dispatch: (action) => {},
//     reset: () => {}
// }

// const { getState, setState } = utilizeState(initialState);
// console.log(getState().grumps);

// setState(value => ({
//     grumps: 0,
//     dispatch: (action) => {
//         setState(state => reducer(state, action));
//     },
//     reset: () => {
//         setState(initialState);
//     }
// }));

// getState().dispatch({ type: types.inc, by: 2 });
// console.log(getState().grumps);

// getState().reset();
// console.log(getState().grumps);\

// const types = { inc: "increase", dec: "decrease" }; updateReducer 성공

// const reducer = (state: any, { type, by = 1 }: { type: any, by: number }) => {
//     switch(type) {
//         case types.inc:
//             return { grumps: state.grumps + by };
//         case types.dec:
//             return { grumps: state.grumps - by };
//         default:
//             return state;
//     }
// }

// interface IinitialState {
//     grumps: number,
//     dispatch: (reducer: any, action: any) => void   // 리듀서를 인자로 받을 수 있게 수정
// }

// const initialState: IinitialState = {
//     grumps: 0,
//     dispatch: (reducer, action) => {}
// }

// const { getState, setState } = utilizeState(initialState);
// console.log(getState().grumps);

// setState(value => ({
//     grumps: 0,
//     dispatch: (reducer, action) => {   // reducer를 인자로 받을 수 있게 수정
//         setState(state => reducer(state, action));
//     }
// }));

// // 사용 예
// getState().dispatch(reducer, { type: types.inc, by: 2 });  // 원하는 리듀서를 인자로 전달
// console.log(getState().grumps);

// interface Keys {
//     args1: number,
//     args2: string
// }

// interface Action {
//     update: () => void,
//     dispatch: (args1: number, args2: string) => void
// }

// const keyStore: Keys = {
//     args1: 0,
//     args2: ""
// }

// const ActionStore: Action = {
//     update: () => {},
//     dispatch: (a1: number, a2: string) => {}
// }

// const { getStates, setStates } = utilizeMultipleState(keyStore, ActionStore);
// console.log(getStates());

// setStates((v: any) => ({
//     args1: 1,
//     arg2: "kim",
//     update: () => {
//         setStates((p: any) => ({ ...p, args1: p.args1 + 1, args2: "james" }));
//     },
//     dispatch: (a: number, b: string) => {
//         setStates((p: any) => ({ ...p, args1: a, args2: b }));
//     } 
// }));

// getStates().update();
// console.log(getStates());

// getStates().dispatch(1, "james");
// console.log(getStates());

// interface Keys {
//     args1: number,
//     args2: string
// }

// interface Action {
//     update: () => void,
//     dispatch: (args1: number, args2: string) => void
// }

// const keyStore: Keys = {
//     args1: 0,
//     args2: ""
// }

// const ActionStore: Action = {
//     update: () => {},
//     dispatch: (a1: number, a2: string) => {}
// }

// interface A {
//     args: number,
//     message: string
// }

// interface B {
//     updateArgs: (value: number) => void,
//     updateMessage: (value: string) => void
// }

// const Keys: A = {
//     args: 0,
//     message: ""
// }

// const Action: B = {
//     updateArgs: (v) => {},
//     updateMessage: (v) => {}
// }

// const test1 = utilizeState(Keys);
// const test2 = utilizeState(Action);

// const { getState, setState } = utilizeMultipleState(test1, test2);
// console.log(getState[0]());

// setState[1](value => ({
//     updateArgs: (v) => {
//         setState[0](prev => ({ ...prev, args: v }));
//     },
//     updateMessage: (v) => {
//         setState[0](prev => ({ ...prev, message: v }));
//     }
// }));

// getState[1]().updateArgs(1);
// getState[1]().updateMessage("kim");

// console.log(getState[0]());

/* 멀티플 테스트 성공 */

// interface A {
//     args_a: number,
//     args_b: string,
// }

// interface B {
//     update: (value: number | string) => void,
//     dispatch: (value: number | string) => void
// }

// const Keys: A = {
//     args_a: 0,
//     args_b: "",
// }

// const Action: B = {
//     update: (v) => {},
//     dispatch: (f) => {}
// }

// function mergeObjects<T extends object>(...state:  T[]) {
//     let toMerge = state.reduce((pv, cv) => {
//         return Object.assign(pv, cv);
//     })

//     return toMerge;
// }

// mergeObjects(Keys, Action)

// function statetest<T>(a: T): [() => T, (toUpdate: T) => void] {
//     const getState = () => a;

//     const setState = (toUpdate: T) => {
//         return a = toUpdate;
//     }

//     return [getState, setState];
// }

// const [state, setState] = statetest<number>(0);
// for (let i = 0; i < 5; i++) {
//     setState(state() + 1);
//     console.log(state());
// }

// 롤백 구현
interface itest {
    num: number,
    up: () => void,
    reset: () => void,
    rollback: () => void
}

const test: itest = {
    num: 0,
    up: () => {},
    reset: () => {},
    rollback: () => {}
}

const { getState, setState } = utilizeState(test);

// setState(v => ({
//     num: 0,
//     up: () => {
//         setState(prev => ({ ...prev, num: prev.num + 1 }));
//     },
//     reset: () => { setState(test) },
//     rollback: () => {
//         setState(utilizeRollback(test)) 대충 이렇게?? 아니면
//         setState(prev => utilizeRollback(test)) 이정도
//     }
// }));