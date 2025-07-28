// sync programming

import log from "./utils";

function task1() {
  console.log("task1");
}

function task2() {
  console.log("task2");
}

// task1();
// task2();

// async programmming

// here first task4 will then task 3

function task3() {
  setTimeout(() => {
    console.log("task3");
  }, 2000);
}

function task4() {
  console.log("task4");
}

// task3();
// task4();

// ---------------- Promises --------------------------------------------------------

// Promise ek object hai jo represt karta h completion , failure , pending ko synchronus operation ke upar

console.log("-------------Promises---------------------------------");

const fetchData = (value: boolean): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (value) {
      setTimeout(() => {
        resolve("data fetched successfully");
      }, 2000);
    } else {
      reject("my error");
    }
  });
};

fetchData(false)
  .then((data) => {
    // console.log(data);
  })

  .catch((error) => {
    // console.log(error);
  });

// we can do chaining also

fetchData(true)
  .then((data) => {
    // console.log(data);
    return data;
  })

  .then((moreData) => {
    // console.log("more data", moreData);
  })

  .catch((error) => {
    // console.log(error);
  });

// we can also write nested promises

//------------------------------------------------------------------------------------

//  to solve cmplexity in promises we use async await

// async -> ye hamesha ek promise return karta hai

const fetchData2 = async (): Promise<string> => {
  return "data fetched bro";
};

fetchData2()
  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error);
  });

console.log("hello bhai "); // ye "data fetched bro" se phle print hoga as wo async fn h promise return karta h to time lagega

async function geData(): Promise<string> {
  const data = await fetchData2();
  return data;
}

console.log(geData());

// For error handling we will wrap it inside try catch

//-------------------------------working with api ------------------------------

// -> ts jo bhi data fetched hoga uske upar type safety provide kar deta hai

interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

async function fetchPost(): Promise<Post[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // json data

    const posts: Post[] = await response.json();

    // console.log(posts);
    return posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

fetchPost()
  .then((data) => {
    // console.log("data aya", data);
  })
  .catch((error) => {
    console.log(error);
  });

//--------------------- Promse.all() ------------------------------------------------

// -> ye use hota hai taaki ham multiple promises ko cuncurrently run kar sake and sabke liye ek saath wait ka sake jab tak  saare resolve na ho jaye

async function promise1() {
  console.log("promise1");
  return "promise1";
}

async function promise2() {
  console.log("promise");
  return "proise2";
}

async function fetchData3(): Promise<[string, string]> {
  const [data1, data2] = await Promise.all([promise1(), promise2()]);

  return [data1, data2];
}

fetchData3()
  .then((data) => {   // array hai data
    console.log(data, "bhai data hai kya");
  })

  .catch(() => {});
   //-------------------------------------------------------------------------------------


   let strlen:string