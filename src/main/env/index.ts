// import * as n from './env/func';
import { int, list, dict, str, floatArray, char, float, None } from '../pm5';

/*
const a: list = [1, 2, 3];
const num1: int = 12;
const dicc1: dict<number> = { a:1, b:2 };

a.push(num1);
console.log(a);

console.log(dicc1["a"] + dicc1["b"]);

const show = console.log
show("d");

*/

export function appendList(array: list, element: int | string) {
    array.push(element);
}

/*
const arr: list = [1, 2, 3];
const el: int = 4;

console.log(arr);
appendList(arr, el);
console.log(arr);
*/

export function addDict(dict: dict<any>, key: string, value: int | string) {
    dict[key] = value;
}

/*
const d1: dict<any> = { a: 1, b: 2 }
const k = "c";
const v = 3;

console.log(d1);
addDict(d1, k, v);
console.log(d1);
*/

export function isStartsList(array: list, searchStr: string | number): boolean {
    if (array[0] === searchStr) { return true }
    return false;
}

export function isStartsDict(dict: dict<any>, searchStr: string, searchStr2: string | number): boolean {
    if (dict[searchStr] === searchStr2) { return true }
    return false;
}

/*
const arr2: list = [1, 2, 3];
const d2: dict<any> = { a: 1, b: "hello", c: 3+1 };

console.log(isStarts(arr2, 1));
console.log(isStartsd(d2, "a", 21));
*/

/*
const a: str = "d";
console.log(a);

console.log(typeof a);
*/

export function type(value: str | int | object | any): str {
    return typeof value;
}

export function Tofloat(value: string): int {
    return parseFloat(value);
}

/*
const d3: dict<any> = { a: "d", b: 3 };
console.log(d3);
console.log(typeof d3);
console.log(type(d3));

console.log(d3["a"]);

const aofb: list = Object.keys(d3);

for (let i = 0; i < aofb.length; i++) {
    console.log(aofb[i]);
}
*/

/* commited by resforx */

/*
const fa1: floatArray<number> = [1.23, 1.24]
const en1: int = fa1[0] + fa1[1];
const res = en1.toFixed(2);

console.log(float(res));
*/

const f1: float = 1.23;
const f2: floatArray = [1.23, f1];
