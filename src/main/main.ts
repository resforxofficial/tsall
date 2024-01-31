import { variableallof } from '../vch/vch';
import read from 'readline';

const r1 = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

let r2type = "";
let mdfva = "";
/**
 * mut a: int = 1
 */
r1.question(`TSP ${process.cwd()}> `, (ans) => {
    const r2 = ans.split(" ");
    // variableallof(r2[0], r2[1], )
    // for (let i = 0; i < r2.length; i++) {
    //     console.log(i, r2[i]);
    // }
    if (r2[1].endsWith(":")) {
        r2type = r2[2];
        mdfva = r2[1].replace(":", "");
        console.log(r2type);
    } else {
        // ...
    }
    r1.close();
});
