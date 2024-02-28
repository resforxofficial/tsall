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
console.log(getState().count);

setState(value => ({ 
    count: 0, 
    setCount: () => { 
        setState(prevState => ({ ...prevState, count: prevState.count + 1 })); 
    } 
}));

console.log(getState().count);
getState().setCount();

console.log(getState().count);
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
/* ex.1) create people controller (succeeded)
interface IPerson {
    name: string,
    age: number,
    dispatch: (args: string, arg2: number) => void
}

const Person: IPerson = {
    name: "kim",
    age: 15,
    dispatch: (action, action2) => {}
}

const { getState, setState } = utilizeState(Person);
console.log(`name: ${getState().name}   age: ${getState().age}`);

setState(value => ({
    name: "kim",
    age: 15,
    dispatch: (a, b) => {
        setState(prev => ({ ...prev, name: a ? a : "", age: b ? b: 0 }));
    }
}));

getState().dispatch("james", 20);
console.log(`name: ${getState().name}   age: ${getState().age}`);
*/

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