// utility_types-> ye hame madad karta hai ki ham ek type ko transform aur compose kar sake various ways me iski madad se ham manupulate karke apne types ke saath kaam kar sakte hai, ye tab istemal me aata hai jab koi complex type sructure ka istemal karna ho 

//  1. Partial

interface UserRecord{

    name:string,
    age:number,
    email:string,

}

const updateUser=(user:Partial<UserRecord>)=>{

    console.log(user);
    
}

updateUser({name:"shubham"});// when we use Partial every property is optional we can miss some property  when passing in function , it will not give error  
updateUser({name:"shubham",email:"njshs@gmail.com"});
updateUser({});


// another way to use it 

type User12=Partial<UserRecord>;
let user5:User12={ // here we have not passed  email but will not give error as all properties are optional

    name:"raj",
    age:20


}

// --------------------------------------------------------------------------------------------------

// 2. Required


interface UserRecord2{

    name?:string,  // here name and age is optional but in required all should be rquired otherwise it will give error 
    age?:number,
    email:string,

}
type User123=Required<UserRecord>;

let user6:User123={

    name:"shubham",
    age:328,  //   age is optional in interface but when we use required then we need to pass all properties either it is optional or not 
    email:"hwdwd@gmail"
}

// --------------------------------------------------------------------------------------------------

// 3. Readonly -> can not reasign value

type UserRecord3=Readonly<UserRecord>;

let usr:UserRecord3={
     name:"raj",
    age:20,
    email:"shubham@gmail.com"

}

// usr.email="dbfdf" // we can not reassign values like here we, cant  reassign value in email, it will give error


//----------------------------------------------------------------------------------------------------


// 4. Pick -> ye ek naya type create karta h jaha pe ye ek subset of jitne bhi properties hamne define kiya hai uska ek subset le leta hai 



















 