class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `my name is ${this.name} and my age is ${this.age}`;
  }
}

const myperson = new Person("shubham", 20);

console.log(myperson.greet());


//------------------------------------------------------------------------------------------------------------

// acess mdifiers 


// public ->  Acessible from anywhwere , this is default if not any modifiers specified 
// private-> acessible only withn class 
// protected-> acessible within class and its subclasses



class Car2{

    private make:string;
   private model:string;
    protected year:number;

    constructor(make:string,model:string,year:number){

        this.make=make;
        this.model=model;
        this.year=year;


    }

     getmodel():string{

        return this.model;


    }



}

const newcar=new Car2("Tesla","model10",208);

console.log(newcar.getmodel());// if getmodel is private it will give error 

// console.log(newcar.year);  // it will give error as it is protected 


//--------------------------------------------------------------------------------------------

// Inheritance -> properties and methods ko inherit karna from parent

class Animal{  // parent class

    constructor(public name:string){  // here if we do public then we dont need to define name variable seperately in Animal class, it will auto used 

    

    }

   protected makeSound():void{

        console.log("some generic sound");
        

            
    }
}

    class Dog extends Animal{  // child class


        constructor(name:string,public legs:string,public age:number){// here legs,age,name are created and initalised no ned to do extra thing

            super(name) // this calls and initalise parent constructor , we must need to provide if it is defined 

        }

        makeSound():void{

            console.log(`this is ${this.name} dog the sound of dog having ${this.legs} legs and ${this.age} age `);
            
        }



    }

    let dog= new Dog("saurabh","2",22);

    dog.makeSound()


    //--------------------------------------------------------------------------------------------------


    // Abstract class ->  ye base classes hoti hai, jo kabhi bhi directly instanciate nhi hoti h , ye sirf is liye bani hai ,takki koi dusri class ise extends kar sake , aur iske methods ko implements kar sake



   abstract class shape{


    abstract getArea():number;// this is abstract method must be implemeted by subclasses

     printArea():void{

        console.log(`the area is ${this.getArea()}`);
        


    }



    }

    class rectangle extends shape{


        constructor(private width:number,private height:number){

            super();
        }

        getArea(): number {

            return this.width*this.height;
            
        }
    }

    let myshape=new rectangle(100,200);
   console.log( myshape.getArea());
   myshape.printArea()


   
   









