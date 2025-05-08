enum myenum{

    Red="red",
    Green="green",
    Blue="blue",
}
const enum myenum1{  // it can also be used gives optimised js code when compiled to js 

    Red="red",
    Green="green",
    Blue="blue",
}

let value:myenum1=myenum1.Green


console.log(myenum);


let Color:myenum=myenum.Green
console.log(Color);

console.log(typeof(Color));
