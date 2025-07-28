// namespaces -> ye ek tarika hota hai jisme ham releted code ko ek jagah pe group kar dete hai  ek single name ke andar jisse naming collision nahi hota  agar ise global scope me istemal kar rahe ho


// ye kam istemal hotah but modules jyada use hote hai

namespace Geometry{


    export const x=463847;


    export class Calc{

        area(width:number,height:number){

            return width*height;



        }



    }



    export function calc_area(radius:number):number{

        return Math.PI*radius*radius;


    }

}


console.log(Geometry.x);
console.log(Geometry.calc_area(4));


const cal= new Geometry.Calc();
console.log(cal.area(2,4));
