// import * as n from './env/func';
import { int, list, dict } from './pm5';

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

function appendList(array: list, element: int | string) {
    array.push(element);
}

/*
const arr: list = [1, 2, 3];
const el: int = 4;

console.log(arr);
appendList(arr, el);
console.log(arr);
*/

function addDict(dict: dict<any>, key: string, value: int | string) {
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

function isStarts(array: list, searchStr: string | number): boolean {
    if (array[0] === searchStr) { return true }
    return false;
}

function isStartsd(dict: dict<any>, searchStr: string, searchStr2: string | number): boolean {
    if (dict[searchStr] === searchStr2) { return true }
    return false;
}

const arr2: list = [1, 2, 3];
const d2: dict<any> = { a: 1, b: "hello", c: 3+1 };

console.log(isStarts(arr2, 1));
console.log(isStartsd(d2, "a", 1));

