// Q1 write a ts fun to calcualate factorial with proper type annotation

function factorial(num:number):number{

    if(num==1 || num==0) return 1

    return num*factorial(num-1)


}

// console.log(factorial(5));

// Q2 define a function that takes a user object and returns a formatted string


interface user{

    name:string,
    phone:number,
    age:number,
    isLoggedIn:boolean,

}


function makeString(myuser:user):string{

    return `the user is ${myuser.name} and phone no is ${myuser.phone} and age is ${myuser.age} and is ${myuser.isLoggedIn?"loggedin":"not loggedin"}`

}

let user1:user={

    name:"shubham",
    phone:483857489,
    age:20,
    isLoggedIn:false
}


// console.log(makeString(user1));


// q3 write a ts function , thatcalculates the total price of an array of products object , each object has price and quantity



interface product{

    id:string,
    price:number,
    quantity:number,

}

function productPrice(...myproduct:product[]):number{

    let totalprice:number=0

    myproduct.forEach((item)=>{

        totalprice+=item.price*item.quantity;

    
    })

    return totalprice


}

let product1:product={

    id:"1",
    price:10,
    quantity:2
}
let product2:product={

    id:"1",
    price:20,
    quantity:4
}
let product3:product={

    id:"1",
    price:30,
    quantity:2
}
let product4:product={

    id:"1",
    price:40,
    quantity:1
}



console.log(productPrice(product1,product2,product3,product4));


// Q4 define a union type for a vechile that can either be a car or bike with difff properties , write a function  to log details based on the vechile type


type carData={

    type:'car',
    make:string,
    model:string,
    year:number,
}
type bike={

    type:'bike',
    brand:string,
    
    cc:number,
}

type Vechiles=bike|carData

function getVechile(vechile:Vechiles){

    if(vechile.type=='car'){

        console.log(vechile);
        
    }

    else{


        console.log(vechile);
        
    }



}

let myCar:Vechiles={

    type:"car",
    make:"sdh",
    model:"228",
    year:2025,
}
let mybike:Vechiles={

    type:"bike",
    brand:"honda",
    
    cc:47846
   
}

getVechile(myCar)
getVechile(mybike)




