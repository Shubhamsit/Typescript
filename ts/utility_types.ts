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

type UserInfo=Pick<UserRecord,'name'|'email'>;

const userInfo:UserInfo={



    name:"shubham",
    email:"gjsahd@gmail",
  //  age:10  // will not let us use it here 
}

//----------------------------------------------------------------------------

// omit


type UserWithoutEmail=Omit<UserRecord,'email'>;

const userOmitInfo:UserWithoutEmail={



    name:"shubham",
  //  email:"gjsahd@gmail",  // here we cant use email as it is ommited
    age:10  
}



//-------------------------------------------------------------------------------------------

// Record

type UserRecordInfo= Record<string,number>;

const userRecordInfo:UserRecordInfo={

  //  name:"shubham", // it will shoow error as we have defined it should be onlu assigned nmmber

  name:0 // it will take 

}



type Role='admin'|'user'|'guest'

const userRole:Record<Role,string>={

    admin:"shubham",
    user:"priya",
    guest:"sujal"


}


console.log(userRole.admin,"bhai admin");



//--------------------------------------------------------------------------------------------

// Exclude(ye use hota h ek certain type ko remove karne ke liye union types ke andar se)

type Stat ='success'|'error'|'loading';

type ExcludeError=Exclude<Stat,'error'>

const stat1:ExcludeError='success'
const stat2:ExcludeError='loading'
// const stat3:ExcludeError='error' // will give error as error is excluded not meant to be used here

//-----------------------------------------------------------------------------------------------


///Extract


type Stat2 ='success'|'error'|'loading';

type ExtractError=Extract<Stat2,'error'|'loading'>;

const extractError:ExtractError='error'
const extractError2:ExtractError='loading'
// const extractError3:ExtractError='success' // will give error 



//------------------------------------------------------------------------------------------

// NonNullable

type MayBeUser=string| null|undefined

type UserNull=NonNullable<MayBeUser>;

// const userNull:UserNull=undefined  // give error undefined ya nulll nhi hona chahiye
// const userNull:UserNull=null   // give error 



//-----------------------------------------------------------------------------------------------


// ReturnType

function getType(){




    return {name:"shubham",age:21};
}


type UserReturnType=ReturnType<typeof getType>;  // yaha pe ye getType fn ke return type ko leke ek type bana leta hai

const userType:UserReturnType={name:"shubham",age:28};




//-----------------------------------------------------------------------------------------

// Parameters-> ye use hota hai extract karne ke liye types of functions parameter as a tuple 


function updateUserData(name:string,age:number){


    console.log(`name:${name} and age:${age}`);


}


type updateUserParams=Parameters<typeof updateUserData >;

const params:updateUserParams=["shubham",20];  // ye parameter ke type se type bana raha 


//------------------------------------------------------------------------------------------

// constructor parameter

class Userdata{


    constructor(public name:string,public age:number){



    }

}


type UserConstructorParams=ConstructorParameters<typeof Userdata>;


const userParams: UserConstructorParams=["shubham",21];








































































 