/*


decorators-> ye special kind of declaration hota hai jo ham kisi bhi class , method or properties ke saath attach kar sakte hai , ye hame allow karta hai ki us particular chiz ki behaviour jo hai use ham  modify kar sake in declarative way, mostly used in (Angular)


types:
class decorator
method decorator
accessor & property decorator
parameter decorator


*/





//--------------- class decorator-------------------------------------------------


function Logger(constructor:Function){

    console.log(`logging ${constructor.name}`);
    
}

@Logger // attached here decorator
class People{


    constructor(public name:string){

    }


}

const p=new People("shubham");

console.log(p);


//----------------method decorator---------------------------------------------------


function LogMethod(target:Object,propertyKey:string,descriptor:PropertyDescriptor){


    const orignalMethod=descriptor.value;
    descriptor.value=function(...args:any[]){


        console.log(`Method called ${propertyKey}`);

        return orignalMethod.apply(this,args);
        
    }








}

@LogMethod
class CalOp{

    add(a:number,b:number){
        return a+b;
    }




}

const calcOp=new CalOp();

calcOp.add(5,4);



