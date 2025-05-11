// type_guards-> type_guards hame , more specific type checks laga ke deta hai, ye aisa method h jo hame allow karta hai , ek variable ke type ko check karne ke liye , run time me check karne ke liye aur  uske type ko narrow karne ke liye ek condition laga ke , 

// ye hame help karta h ensure karke ki ham waha correct type hi pass kar rahe hai , ye hame run time error se bachhata hai aur hamare type typem safety bko aur improve kara hai , specially ye tab use hota hai jab ham uniontype ka istemal karte  hai

//  iise ham 3 tarike se istemal kar skete hai 
// 1. type guard
// 2.type of 
// 3. instance of 
// 4. custom type guard fn

function printId(id:string|number){

    if(typeof(id==='string')){
        console.log("is is string "+id);
        
    }
    if(typeof(id==="number")){

        console.log("id is number"+id);
        
    }
}


class Dog1{


    bark(){

        console.log("wolf");
        
    }
}

class Cat{

    meow(){

        console.log("meow");
        
    }
}

function handlePet(pet:Cat|Dog1){

    if(pet instanceof(Dog1)){

        pet.bark();
    }

    if(pet instanceof(Cat)){

        pet.meow()
    }
}


let mycat=new Cat();

handlePet(mycat);


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// custom type_guard->  custom type guard ek aisa function haijo ki return karta hai boolean value and use karta hai ek special value , jaah pe  "is" ka istemal hota  hai

interface Fish{

    swim():void;
}


interface Bird{

    fly():void;


}


function isFish(pet:Fish|Bird):pet is Fish{  /// yaha ham ye specify kar rahe ki ye ek fish hogi

    return (pet as Fish).swim!=undefined  // ye hame boolean return karega 



}