// regular fn
function addnumber(a:number,b:number):number{

    return a+b;
}

// console.log(addnumber(2,5));


// function expression

const divide=function(a:number,b:number):number| string{

    return a/b;

}

// console.log(divide(10,2));


// arrow fn

const divide2=(a:number,b:number):number=>{
    return a/b

}


console.log(divide2(8,2));

// optional and default parameter in ts

function greetUser(username:string,greeting?:string):void{

    // console.log(`${greeting? greeting:""} ${username}`);

}

greetUser("shubham"); // here it will give undefined shubham as we are using optional parameter and not passed anything in greeting , we can also check for undefined and thencan use trnary opertaor 



// default parameter in functions  (it works same as optional)

function greetUser1(username:string,greeting:string="hi"):void{

    console.log(`${greeting? greeting:""} ${username}`);

}

// console.log(greetUser1("raj","hey"));
// console.log(greetUser1("raj"));


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function overloading

function getLength(value:string):number;
function getLength(value:any[]):number;
function getLength(value:any ):number{

    if(typeof(value)=="number"){
        return value;
    }

    return value.length
}

// console.log(getLength("shubham"));
// console.log(getLength(["shubham","sachin"]));
// console.log(getLength("my name is khan"));

let vale:any=18
// console.log(getLength(vale));

// --------------------------------------------------------------------------------------------------------
// rest parameters 

// -> ye use hota hai any number of parameter pass karne ke liye 

function mysum(...numbers:number[]):number{

    return numbers.reduce((acc,val)=>acc+val,0)



}

console.log("sum",mysum(1,2,3,4,5,4,5,6,7,7,8,4,4,5,5,6,6,));


function greet4(greetings:string,...names:string[]){

    names.forEach((name)=>{
        console.log(`${greetings} ${name}`);
        
    })



}

greet4("hello","shubham","rahul","raj")





