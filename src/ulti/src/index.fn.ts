/**
 * test or study of typescript hd function
 */

export {};

/*
function testset<T>(func: (value: T) => void, arr: T[]): void {
    arr.forEach(func);
}

const a = testset<string>((value) => {
    console.log(value);
}, ["hello", "world"]);

function testset1<T>(func: (value: T) => void, num: T): void {
    func(num);
}

const a1 = testset1<number>((value) => {
    for (let i = 0; i < value; i++) {
        console.log(i);
    }
}, 5);
*/

// export function set<T>(initializer: (value: T) => void): T {
//     const value = {} as T;
//     initializer(value);
//     return value;
// }