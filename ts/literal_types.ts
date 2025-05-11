// literalType-> literal type ek specific value ki taraf ishara karti h matlab, ts le andar lieral type  ek specific value hoti hai , jo ki ek general datatype se jyada hoti hai

// string literal

type orderStatus = "deliverd" | "pending" | "cancelled";
let order: orderStatus = "pending";

let answer: "yes" | "no";
answer = "no";

// number literal

let count: 0 | 1 | 2;
count = 2;

// boolean literal

let isVisible: true | false;
isVisible = false;

type LiteralType = "helo" | 2 | "hi" | { name: string; age: number };

type Action = "add" | "update" | "delete";

function takeAction(action: Action) {
  switch (action) {
    case "add":
      console.log("add fudhf");
      break;

    case "delete":
      console.log("delete ");
      break;

    case "update":
      console.log("update");
      break;

    default:
      console.log("none");
      break;
  }
}

function printStatus(status:'sucess'|'error'|'loading'):void{

    console.log(`current state is ${status}`);
    
}


printStatus("sucess");
takeAction("delete")



