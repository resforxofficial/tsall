// import * as n from './env/func';
import { int, list, dict } from './pm5';

const a: list = [1, 2, 3];
const num1: int = 12;
const dicc1: dict<number> = { a:1, b:2 };

a.push(num1);
console.log(a);

console.log(dicc1["a"] + dicc1["b"]);

const show = console.log
show("d");