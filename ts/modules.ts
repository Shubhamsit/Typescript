// modules {import/export}

// using utils.ts file

import  * as Utils from './utils' // importing all from utils file (called aliasing import)
import log from './utils';


import { add2Nos, PI } from "./utils";

console.log(add2Nos(2,3));


console.log(Utils.PI);

const calci=new Utils.Calcualator();
console.log(calci.add(10,5));
console.log(calci.sub(10,5));
console.log(calci.mul(10,5));

// defaults exports -> ek module ke pass ek single default  export ho sakta hai jo ham import kar sakte bina curlybraces {} ke istemal kiye


console.log(log("hello user"));

``






