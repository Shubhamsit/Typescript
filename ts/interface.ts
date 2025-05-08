// interface ek tarika h jike help se ham apne obj ko structure karte h ki uske andar kon si property aur function defined hogi , ye ensure karta h type Safety, it gives spaecific shape to object

interface Person{

    name:string,
    age:number,

}

let person:Person={  // here we have used the inteerface  to make susre type safety
    name:'shubham',
    age:10,
    // roll:20, // it will give error as in interface it is not defined 

}


interface Person1{

    
    name:string,
    age:number,
    // greet():void // use this if we define fn inside , when we create object
    greet:(message:string)=>string // use this when we define fn outside object 

    }

    let person1:Person1={

        name:'shubha',
        age:10,
        // greet(){  // use this when we define fn inside 
        //     console.log("hi");
            
        // }

        greet // if we define fn outside 
    }


    function greet(message:string):string{  // this is fn created outside 

        console.log(`${message} welcome` );
        return "hi"
        
    }

    person1.greet("shubham")

    // interface withbfunctions

    interface MathOps{
        (a:number,b:number):number // 


    }

    const add:MathOps=(a,b)=>a+b;
    const sub:MathOps=(a,b)=>a-b;

    console.log(add(2,3));
    console.log(sub(8,3));
    
// ----------------------------------------------------------------------------------------------------------------------------
    // type alias -> ye ek tarika hota hai jiske dwara ham ek naya name ya alias provide kar sakte hai ek type ke liye , iska matlab ye hai ki , ye  allow karta hai, ek meaningfull name denne ke liye ek particular type ko, interface ki tarah ye bhi code ko readable banata hai 


    type UserId=string;
    let userid:UserId="shubham";

    type Person3={
        name:string,
        age:number
    }
let person4:Person3={

    name:"shubham",
    age:20

}

console.log(person4.name);


// now use it in unions

type ID=string| number;

let myid:ID="100";
let orderId:ID=200


// interface vs type allias

interface user{

    name:string,
    phone:number,

}

interface Customer extends user{   // here we want to use one interface in another so we can use extends and then name and phone will be included in this interface

    address:string
}

let mycustomer:Customer={  // here we have used all three properties

    name:"x",
    phone:2478,
    address:"ddhd"
}



type Vechile={

    make:string,
    model:String
}

type Car= Vechile &{  // & denotes, intersection types, here both peoperties will be added 

    isElectric:boolean,
}

let mycar:Car={

    make:"mwjdw",
    model:"whdwdhu",
    isElectric:false

}


//the diff  b/w inteface and type allias is that in interface we can re define some of properties again and it will be work


interface game{

    name:string,
    rules:string
}

interface game{   // here we have redefine and added one more properties but in type allias is  not possible gives error

    duration:number


}

let mygame:game={

    name:"kabbadi",
    rules:"dnskdnk",
    duration:36
}

//   below is one exmaple of function type allias

type MathOps1=(a:number,b:number)=>number;
let add1:MathOps1=(x,y)=>x+y

console.log(add1(2,8));


// one more example

type status="active"|"inactive"| "pending"
let userStatus:status="active" // other than activate,inactive,pending will give error



// one more example of recursive type allias

type tree={

    value:string,
    children:tree[]


}

let mytree:tree={

    value:"dsdhg",
    children:[
        {
            value:"child1",
            children:[
                {
                    value:"grandchild",
                    children:[]
                }
            ]
        }
    ]
}

//-----------------------------------------------------------------------------------------------------------------

// optionl value 

interface optional{

    name:string,
    roll:number,
    class?:string


}

let myclass:optional={

    name:"shubham",
    roll:10

    // here we have class property is optional if we not include it will not give any error we define optinal value with ?

    // we can also give optonal property in type allias


}







    




