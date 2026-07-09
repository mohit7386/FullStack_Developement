/* Filename: script.js*/

function myFun () {
    document.getElementById('demo')
        .innerHTML = 'Content Changed'
}
x = null;
console.log(x);
y = undefined;
console.log(y);
//creating an object of student
const student = {
    name:"Mohit",
    age: 26,
    cgpa: 9.5,
    isPass: true,
};
console.log(student);
//creating an object of PEN showing on amazon
const pen = {
    name: "Parker Jotter Standard CT Ball Pen (Black)",
    rating: 4.5,
    offer: "Upto 40% off",
    price: 270,
};
console.log(pen);
//----------------------------------------------------------------------------------------------------------------------------------
//for-of loop which iterates over the values or character by character of an string or an array. It is used to extract the values of an array or string. It is used to iterate over the values of an iterable object and used for arrays, strings, maps, sets, etc.
const name="JAVASCRIPT";
let count=0;
for(const val of name){  // humein jarurat nahi hai stopping condition and increment/decrement statement ki kyuki ye automatic saari values pe iterate bhi karta hai one by one and and stop bhi automatic ho jaata hai jab saari values pe iterate kar leta hai. Ye for-of loop hamesha iterable object ke values pe hi iterate karta hai. Agar hum isko object pe use karenge to ye error dega kyuki object iterable nahi hota hai.
    console.log("val = ", val);
    count++;
}
console.log("Total characters in the string = ", count);
//let's take another example of for-of loop using array
let sum=0;
const arr= [1,2,3,4,5,6,7,8];
for(const val of arr){
    console.log("Values of array = ", val);
    sum+=val;
}
console.log("Total values in the array = ", sum);
//----------------------------------------------------------------------------------------------------------------------------------
//for-in loop which iterates over the keys of an object. It is used to extract the keys of an object. It is used to iterate over the keys of an object and used for objects and also an array.
//creating an object 
const user = {
    name: "Mohit", 
    age: 26,
    role: "admin",
};
for(let key in user){  // humein jarurat nahi hai stopping condition and increment/decrement statement ki kyuki ye automatic saari keys pe iterate bhi karta hai one by one and and stop bhi automatic ho jaata hai jab saari keys pe iterate kar leta hai. Ye for-in loop hamesha object ke keys pe hi iterate karta hai. Agar hum isko array ya string pe use karenge to ye error dega kyuki array ya string object nahi hota hai.
    console.log(key, "=", user[key]); // user[key] is used to access the value of the key in the object. user.key will not work here because key is a variable and not a property of the object. So we have to use bracket notation to access the value of the key in the object.
}
//create a simple guessing game:-
// const mainNum = 39; 
// let userNum = prompt("Guess a number between 1 to 50");
// while(userNum != mainNum){
//     userNum = prompt("Wrong guess! Please try again. Guess a number between 1 to 50");
// }
// console.log("Congrats! You guessed the correct number.");
//----------------------------------------------------------------------------------------------------------------------------------
//Strings:- Strings are used to store and manipulate text. Strings are immutable, which means that once a string is created, it cannot be changed. Strings can be created using single quotes, double quotes, or backticks. It is a sequence of characters used to represent the text.  
let str = "Learning Javascript";
console.log("String = ", str);
for(let l=0; l<str.length; l++){
    console.log("Character at index ", l, " = ", str[l]); // str[l] is used to access the character at the specified index. It returns the character at the specified index. The index starts from 0. If the index is out of range, it returns undefined.
}
console.log("Length of string = ", str.length); // length property is used to get the length of the string. It returns the number of characters in the string.
console.log("Character at index 0 = ", str.charAt(0)); // charAt() method is used to get the character at the specified index. It returns the character at the specified index. The index starts from 0. If the index is out of range, it returns an empty string.
console.log("Character at index 5 = ", str.charAt(5));
console.log("Character at index 20 = ", str.charAt(20)); // if the index is out of range, it returns an empty string.
console.log("Index of character 'a' = ", str.indexOf('a')); // indexOf() method is used to get the index of the first occurrence of the specified character. It returns the index of the first occurrence of the specified character. The index starts from 0. If the character is not found, it returns -1.
console.log("The index of the character at the 11th position is =", str[11]);
//----------------------------------------------------------------------------------------------------------------------------------
//String Literals:- A way to embedded a variable or expression inside a string. It is a way to create a string using backticks. It is also known as template literals.   
//1- String Interpolation:- A way to inject variables , objects or expressions inside the string without concatination.
const Name="Mohit";
const Age = 26;
//Using String concatination 
console.log("My name is " + Name + " and I am " +Age+ " years old.");
//Using String interpolation
console.log(`My name is ${Name} and I am ${Age} years old.`); //By using backtick and ${} we can inject variables , objects or expressions into the string.
//-----------------------------------------------------------------------------------------------------------------------------------
//String Methods:- A way to manipulate strings. It is a way to perform operations on strings. It is a way to manipulate strings using built-in methods.
let str1 = "Learning Javascript is fun";
console.log("String = ", str1);
console.log(`Length of string in uppercase = ${str1.toUpperCase()}`);
console.log(`Length of string in lowercase = ${str1.toLowerCase()}`);
let str2 = "                    Learning Javascript is fun                 ";
console.log(`Removes white spaces using str.trim() method = ${str2.trim()}`); // trim() method is used to remove white spaces from both ends of the string. It does not change the original string.