"use strict";
let str = "my name is shubham raj";
console.log(str);
let bol = true;
console.log(bol);
let numArray = [1, 2, 3, 54];
console.log(numArray);
let strArray = ["shubham,", "saqib",];
console.log(strArray);
let anyArray = [1, "shubham", true];
console.log(anyArray, "bro anyarray");
strArray.forEach((item) => {
    console.log(item.length);
    console.log("val", item);
});
let alltype = ["shubham", 1, false];
let val = undefined;
console.log(val);
let val2 = null;
let obj = {
    name: "shubham",
    roll: 10,
};
obj = Object.assign(Object.assign({}, obj), { college: "su" });
console.log(obj);
let obj1 = {
    name: "shubham",
    roll: 10
};
let obj3 = obj1;
console.log(obj3 == obj1);
console.log(obj3);
let obj2 = Object.assign({}, obj1);
console.log(obj2 == obj1);
let x;
x = 5;
x = "shubham";
console.log(x);
function test(val) {
    console.log(val);
}
test(x);
//# sourceMappingURL=index.js.map