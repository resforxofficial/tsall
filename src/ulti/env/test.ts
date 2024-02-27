// import { set } from '../src/index.fn';

import { utilizeImmer, utilizeReduce, utilizeState } from "../src/index.fn";

// interface ISet {
//     message: string;
//     updateMessage: (value: string) => void;
// }

// const store = set<ISet>((value) => {
//     value.message = "";
//     value.updateMessage = (state) => {
//         value.message = state;
//     };
// });

// const { message, updateMessage } = store;
// updateMessage("kim");
// console.log(message);

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
// normal approach
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
