// keyOf-> ts me ye islie use hota hai kyo ki ham iske dwara ham kisi bhi property ki keys ko nikal sakte hai ya fir union of string literal types create kar sakte hai

interface Person4{

    name:string,
    age:number,
    email:string,
}

type PersonKeys=keyof(Person4);
let keys:PersonKeys='age';
let keys1:PersonKeys='email';