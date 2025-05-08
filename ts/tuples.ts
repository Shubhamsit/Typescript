let coordinates:[number,number,number]=[10,20,30] // it has fixed structure element size fixed with fixed datatype and should be in same order as defined
console.log(coordinates);

let response:[string,number,boolean]=["resource created",200,true];

console.log(response);

let response1:[string,number]=["shubham",2];
response1.push(0); // its a iisue in ts as it will append 0 in response1 tuple
console.log(response1);





