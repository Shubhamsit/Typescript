"use strict";
var myenum;
(function (myenum) {
    myenum["Red"] = "red";
    myenum["Green"] = "green";
    myenum["Blue"] = "blue";
})(myenum || (myenum = {}));
let value = "green";
console.log(myenum);
let Color = myenum.Green;
console.log(Color);
console.log(typeof (Color));
//# sourceMappingURL=enums.js.map