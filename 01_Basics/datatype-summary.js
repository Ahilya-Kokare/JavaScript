// Primitive Datatype(call by value)(It not gives actual value when we copy , gives us copy of that value and changes saved in that copy)
//7 types : String, Number, Boolean, null, undefined, symbol(unique), BigInt(stores scientific value)

// **We don't define dataype in javascript**
const score = 100
const scoreValue = 100.3

constisLoggedIn = false;
const outsideTemp = null;
let userEmail;      //Undefined

const id = Symbol('123')         //Unique
const anotherId = Symbol('123')  //unique
console.log(id == anotherId);    //checking either similar or different


//Reference (non primitive) Datatype (Directly allocate reference of value in memory)
// Arrays, Objects, Functions


//ARRAY
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"ahilya",
    age:20,
}


//FUNCTION
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

//https://262.ecma-international.org/5.1/# sec-11.4.3


//---------------------------------------------------------------

// Two types of memory
// 1)Stack :- Primitive. Copy of data 
// 2)Heap :- Non-primitive. Reference of data

let myYoutubename = "ahilyakokaredotcom"

let anothername = myYoutubename
anothername = "ahilya"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "kokare@google.com"

console.log(userOne.email);
console.log(userTwo.email);

