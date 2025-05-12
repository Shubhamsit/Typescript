// index_signature-> ye hame allow karta hai ki , ham ek object ki shape ko define kar sake,jaha pe saari properties ke naam advance me pata na ho , but aapko keys ki type pata ho ,


interface StringArray{

    [index:number]:String
}

let array1:StringArray=['code','with','mic'];
console.log(array1[0])
// console.log(array1[3]) // will give undefined as that index not exist

interface Fruit{

    [key:string]:string;
}

const fruitsArray:Fruit={

    apple:"my apple", // here apple is key/ index
    bananna:"my banana" // here bananna is key/index


}

console.log(fruitsArray['apple']);
