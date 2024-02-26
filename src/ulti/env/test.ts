// import { set } from '../src/index.fn';

import { utilizeState } from "../src/index.fn";

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

/* Success! ( or phew? succeeded! ) */