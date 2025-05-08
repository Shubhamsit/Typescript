// let a:string="100";
// // a=100 ;// it will give error as it is is strictly string type

// function add(b:number,c:number):number{

//     return b+c;
// }
// let x:number=add(1,2);
// console.log(x);


// Basic types


// let num:number=858_54_589; // underscore for reding properly it will ignore it will give directly 85854589
// console.log(num);

let str:string="my name is shubham raj";
console.log(str); 


let bol:boolean=true;
console.log(bol);

// Array <-------------------------------------------------------------------------------------------->

let numArray:number[]=[1,2,3,54]
console.log(numArray);
let strArray:string[]=["shubham,","saqib",]
console.log(strArray);

let anyArray:any[]=[1,"shubham",true]
console.log(anyArray,"bro anyarray");



// loops in array <------------------------------------------------------------------------------------->

strArray.forEach((item)=>{

    console.log(item.length);
    

    console.log("val",item);
    
})





let alltype:[string,number,boolean]=["shubham",1,false]; // should be in same order and should have exact smae no of values here 3 

let val:undefined=undefined // we can intialise any other value we ned to initialise only undefined to undefined datatypes

console.log(val);

let val2:null=null // we can intialise any other value we ned to initialise only null to null datatypes


//<----------------------------------------------------------------------------------------------------------->

// below way to define is benifit if we want to add more values 

let obj:object={

    name:"shubham",
    roll:10,
}
// console.log(obj);

obj={...obj,college:"su"}; // here we are adding more variables directly
console.log(obj);


// alternate to define obj but it is stricter we can add more types after ones created  to do so need to modify main obj

let obj1:{name:string,roll:number}={

    name:"shubham",
    roll:10

}

// obj1={...obj, college:"su"}   it will give error
// console.log(obj1);

// copying obj using spread operator

let obj3=obj1;
console.log(obj3==obj1); // here both refer to same obj same address gives true



console.log(obj3);


let obj2={...obj1};
// console.log("obj2",obj2);

console.log(obj2==obj1); // gives false as it craeted new obj2 no refer same object

// Type any <-------------------------------------------------------------------------------------------->

// let x=5
// x="shubham"    it will throw error

let x:any
x=5
x="shubham"
console.log(x); // it will work


function test(val:string){
    console.log(val);
    
}
test(x)


// unknown type  (ye waha use hota h jaha we are not sure about datatype) <-------------------------------->

let notSure:unknown="986568";
if(typeof(notSure)=='number'){
    let val:string=notSure.toString()
    console.log(val);
    console.log(typeof(val));
    
  
}

else if(typeof(notSure)=='string'){

    console.log(typeof(notSure.length));
    
    
}

//<------------------------------------------------------------------------------------------------------------->

// never type (ye waha pe use hoga jaha ya to koi value return nahi hongi ya error throw karega)

function infinite():never{

    while(true){
        
    

    }
}

function throwError(message:string):never{

    throw new Error(message);


}
// throwError("error hai")

// infinite()


// void type  

function message(mess:string):void{

    console.log(mess);

    return undefined // it is valid 
    console.log("hi"); // but will not reach here 
    
    
}

message("my message")

// <-------------------------------------------------------------------------------------------------------->

// Typeinference and type assertions  

// typeinference -> bina type diye hi wo assigned value se detect kar lega then agar baad me ham usko diff data type se change karne ka try karenge to wo error dega

let username="shubham"
// username=1 // here it will give error as it already sets  its type  as string


// type assertions->  

// Scenario: You don’t know the exact type
// Imagine you're receiving a value from:

// a user input field,

// a JSON API response,

// or any place where the type is not clearly defined.

// In TypeScript, you'd often type it as unknown to be safe.

// Now suppose you're sure that it's a string, and you want to do string operations like .length, .toUpperCase() etc.

// But TypeScript says ❌ "Nope, it's unknown!"

// Solution: Type Assertion


let someValue: unknown = "hello";
let strLength: number = (someValue as string).length;

// <-------------------------------------------------------------------------------------------------------->

// union type

let id:string | number 
id="shubham" // accepted
id=100 // accepted

// id=true // not accepted as in union we not included boolaen

console.log(id,"id");


// we can define union type in function also

function unionfun(id:string|number,name:string):object{

    return {id,name};



}

console.log(unionfun("100","shubham")); // this is valid
console.log(unionfun(100,"shubham")); // this is also valid because of union



//<-------------------------------------------------------------------------------------------------------->

// type narrowing


function unionfun2(id:string|number):void{

    if(typeof(id)=='string'){

        console.log(id,"is string");
        
    }

    else{

        console.log(id,"is number");
        
    }



}

unionfun2("100");
unionfun2(100);
















