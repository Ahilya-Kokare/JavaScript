const name ="Ahilya"
const repoCount = 50

console.log(name+repoCount+"Value"); //not modern way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //modern way. it is called as string interpolation.

const gameName = new String('ahi-lya')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);    //not include -ve value
console.log(newString);

const anotherString = gameName.slice(-6,4);    //includes -ve value
console.log(anotherString);

const newString1 = "   Ahilya     ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://ahilya.com//ahilya%20";

console.log(url.replace('%20', '-'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));
