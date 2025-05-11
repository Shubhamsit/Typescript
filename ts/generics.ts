// generics->  ts me generics hame help karta h reusable components banane ke liye ,jo ki variety of types ke sath kaam kar sake, aur ye sab hoti h without loosing typeSAfety


// components-> functions,classes, interfacce

// generic fn

function genericFn<T>(arg:T):T{

    return arg;

}

console.log(genericFn<string>("hi")); // jo bhi type pass karenge wo T me chala jaega
console.log(genericFn<number>(10));
console.log(genericFn<boolean>(true));


// interface 

interface keyPair<T,U>{

    key:T,
    value:U
}

let keyPairvalue:keyPair<string,number>={
    key:'pair',
    value:10,

}


// generic constraints


function getLength2<T extends {length:number}>(item:T):number{  // yaha pe ham restrictions laga sakte h ki jisme length property h wahi pass kar sakte arg me 


    return item.length
}

console.log(getLength2("hello")); // it will work and print length of string 
console.log(getLength2([1,2,3,4,5,6])); // it will work and will print length of array
// console.log(getLength2(123)); // it will give error as it is of type number and doesnot have lengyh property



// generic classes 


class Box<T>{


    contents:T;
    constructor(val:T){
        this.contents=val
    }

    getContents():T{
        return this.contents


    }

}

let mybox=new Box<number>(100)
let mybox1=new Box<string>("hi")
let mybox2=new Box<boolean>(false)


console.log(mybox.getContents());
console.log(mybox1.getContents());
console.log(mybox2.getContents());



// one more example

class stack<T>{


   private items:T[]=[]

   push(item:T):void{

    this.items.push(item);
   }

   pop(): T|undefined{
    return this.items.pop()


   }
}

const mystack=new stack<string>();

mystack.push("hello")
mystack.push("shubham")
console.log(mystack.pop());



