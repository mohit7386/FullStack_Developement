
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
    console.log(key, "=", user[key]); // user[key] is used to access the value of the key in the object user.key will not work here because key is a variable and not a property of the object. So we have to use bracket notation to access the value of the key in the object.
}
let simpArrray = [3,2,1,5,7,6,8];
//Applying for in loop and for of loop both on this array
console.log("Printing array indexes and elements");
for(let val in simpArrray){
    console.log(val); //it gives the index of the values because for-in loop gives us the indexes not the values. If you want to access the values then you need to use the sqquare brakcet just like below:-
    console.log(simpArrray[val]);
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
//Strings are immutable, which means that once a string is created, it cannot be changed. If we try to change the character at a specific index, it will not work. for change in the string we have to create a new string with the desired changes. We can use string methods to manipulate strings.  
str="Mohit";
str[4]="S";
console.log(str); //it will not work and the original string will remain the same.
//let's take example where we can mutate the string by creating a new string.
let str7="Lucky";
let newStr=str7.replace("y", "s");
let newStr3=str7.split("y").join("s");
let newStr4=str7.slice(0,4 )+"s"; //ye start index to jitna mention karoge utna hi lega but ending index jitna doge usse ek phle wala index lega. So, agar hum end index 4 denge to ye slice karega 0,1,2,3 index ke charracter ko and 4th index ke character ko nahi lega. isiliye yahan pe isne "MOHI" ko slice kiya and "s" ko add kar diya using concatination.
console.log(newStr);
console.log(newStr4);
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
console.log(`Length of string in lowercase = ${str1.toLowerCase()}`); //these methods forms new strings and does not change the original string.
let str2 = "                    Learning Javascript is fun                 ";
console.log(`Removes white spaces using str.trim() method = ${str2.trim()}`); // trim() method is used to remove white spaces from both ends of the string. It does not change the original string.
//-----------------------------------------------------------------------------------------------------------
//Arrays - An array is a data structure used to store a collection of items that can hold multiple values of the same type. Each item in an array is called an element and each element has a unique index starting from 0 to (n-1). The items are typically stored in contiguous memory locations, allowing for direct access to the elements using their index value. Arrays are mutable, that means we can change the values of the elements in an array. Arrays can be created using square brackets [] and the elements are separated by commas. Arrays can hold multiple values of the same type, such as numbers, strings, objects, etc. Arrays can also hold multiple values of different types, such as numbers, strings, objects, etc. Arrays can also hold other arrays, which are called multidimensional arrays. Arrays can also hold functions, which are called function arrays. Arrays can also hold other data structures, such as objects, which are called object arrays. Arrays can also hold other data structures, such as sets and maps, which are called set arrays and map arrays respectively.
let heroes = ["Ironman",  "Captain America",  "Thor",  "Hulk",  "Spiderman"];
console.log(`Array = ${heroes} and Length of array = ${heroes.length}`);
heroes[1]="Superman"; //Arrays are mutable, that means we can change the values of the elements in an array by their index.
console.log(heroes);
let marks=[90, 80, 70 , 60, 50, 40, 30, 20, 10];
console.log(`Array = ${marks}`);
console.log("Array:- ", marks);
for(let Marks of marks){
    console.log("Marks = ", Marks);
}
for( let i=0;i<marks.length;i++){
    console.log("Marks at index [" + i + "] = ", marks[i]); 
}
//Array methods:- It is a way using manipulate arrays using built-in methods.  
console.log(`Push method adds an element at the end of the array and returns the last element = ${marks.push(93)}`);
console.log(marks);
console.log(`Pop method removes the last element of the array and returns the removed element = ${marks.pop()}`); 
console.log(marks);
console.log(`toString method converts the array into a string and returns the string =\n ${marks.toString()}`);
let marvelHeroes = ["Ironman", "Thor", "Hulk", "Spiderman"];
let dcHeroes = ["Superman" , "Batman"];
//using concat() method to merge two arrays and return a new array. It does not change the original arrays.
let allHeroes = marvelHeroes.concat(dcHeroes);
console.log(`Using concat all heroes: ${allHeroes}`);
//Using unshift() method we can add an element to the start of an array.
console.log("unshift() method: ",marks.unshift(74));
console.log(marks);
//Using shift() method we can delete the element from the start of an array.
console.log("Shift() method: ", marks.shift(74));
console.log(marks);
//Splice() method is used to change in the original array [add,remove,replace]
//splice(StartIdx , delCount , newEl);
let arr4=[1,2,3,4,5,6,7,8];
arr4.splice(2,0,9,10);
console.log(arr4);
//slice() method is used to give you the slice of an array.
let arr11=[10,20,30,40,50,60,70,80];
let slicedArray=arr11.slice(2,6); //ye original array ko change nhi karta new array create karta hai changes ke saath to naye array ko kisi variable me store karna padega print karane ke liye other agar hum direct array ko print kara denge to humein original array hi print karke de dega and ending index non-inclusive hota hai means ki last wala include nahi hoga usse ek pehle wala include hoga bas.
console.log(slicedArray);
//Just example of object:-
let student1 = {
    name: "Mohit",
    Age: 26,
    "Roll No": 1878610033, // Space ki wajah se quotes lagana zaroori hai space agar denge to JS error dega aur agar space lagana hi hai to usko as a string pass karo (double "" ya '' Single quotes mein).
};
console.log(student1.name);      // Output: Mohit (Dot chal gaya)
console.log(student1.Age);       // Output: 26    (Dot chal gaya)

//console.log(student1.Roll No); // ❌ ERROR! Dot nahi chalega because jab bhi object ki keys/property me space agar hota hai to usko acess karne ke liye humein sqaure brackets me uss key ko pass karna padhta hai otherwise error aayega.

console.log(student1["Roll No"]); //  Output: 1878610033 (Square bracket lagana hi padega!)

//Functions:- Block of code that performs a specific task and we only need to create the code once and whenever we needed that code we just simply call(invoke) the function. Benefit is that we don't need to write the code again and again.
//Syntax:-
//function functionName(){
//do some work
//}
//Let's create our first function:-
function myFunction(){ //This is the function declearation jisme humein ye likhna hota hai ki hume function se kya kaam karwana hai ?
    console.log("Hey There! I am learning Functions...");
    console.log("Hey guys! Whats Up?...");
}
//Now we need to call the function....kaam ko karwane ke liye function ko call karenge. 
//and iska benefit ye hai ki humne ek bar apna code likh diya bata diya ki kya karwana hai ab jab bhi hume need hogi iss kaam ki to hum usko call kar lenge simple.
//we can call the function many times you want.
myFunction();
myFunction();
myFunction();
myFunction();
//let's create a function in which it takes some input from the user and prints the output accordingly.
function mysecFunction(msg){
      console.log(msg);
}
//function call
mysecFunction("Hello! bhai kaise ho?");

//Another type of creating a function using expression in which we are storing our function in variable and calling that function using that variable.
const multiply = function(a,b){
    let mul= a*b;
    return mul;
}; //always use semicolon in this type of function where you are storing the function into a variable.
//calling a function using variable
console.log("The multiplication of a and b is: ",multiply(5,3)); //here multiply is a variable. and direct console.log me function call hi value use kar raha hai to humein tab bhi return lagana jaruri hai.

//Another type of function is called "Arrow Function" - Jisme function keyword hatke arrow lag jaata hai and baki sab same rehta hai isme bhi function ko kisi variable me store karate hain and function call bhi function variable se hoti hai sab same as it is function expression.
const greet = (user)=>{ // we called this arrow is - arrow keyword and isme koi antar nahi hai bas function keyword nahi aayega and uski jagah bas arrow keyword lag jaayega and ye multi line function hai.
    return "Welcome " + user;
}; //always use semi colon it's mandatory.
//calling a function using variable 
console.log(greet("Bhai"));
//Single line function using arrow keyword:-
const twoMul = (n) => n * n;  //always keep in mind it's most imp ki yahan pe jo variable honge wo teeno same rehne chahiye tbhi chalega otherwise nahi chalega.
//calling same as using variable 
console.log(twoMul(5)); //yahan single line arrow function me jarurat nahi padhti hai humein return likhne ki because ye auto return ho jaata hai. 

//function me parametres ki value change karne par original value pe koi asar nahi padega.
function changeNumber(num) {
    num = 100; // Parameter (photocopy) ko change kiya isse original value nahi change hogi because of parametres are block scoped unko functions ke bahar se access nahi kar sakte hain....isiliye yahan value change hone pe arguments pe fark nahi padega kabhi bhi.
    console.log("Inside function: " + num); // Output: 100
}
let myAge = 25; // Original Argument
changeNumber(myAge);
console.log("Outside function: " + myAge); // Output: 25 (Original safe hai!) yahan original value pe koi asar nahi padega...

//But non-primitive data types ke liye ye logic failed ho jaayega....kyuki jab hum koi array ya object function me bhejte hain to wo original array ka address bhej deta hai parameter me jisse parameter ke through agar value change karenge to original value bhi badal jaayega...kehne ke mtlb mota mota ye hai ki jab tum array/object as a argument paas karte ho to wo as a address jata hai and jab objects ki properties ko change karte hain to original array bhi badal jaata hai.

//Example:- 
function changeName(userObj){
    userObj.name="Mohit"; //yaha parameter ke through name change kiya 
}
let person = { name: "Lucky"};  //creating an object 
changeName(person); // argument me as a object paas kar diya and original argument as a 'lucky' paas kiya to joki ye ek object hai to parametre me properties ke change ki wajah se ye original array/object ko change kr dega.

//aur agar check karein outside function me kya chal raha hai konsi value hai uspe to 
console.log("Outside Function value: ", person.name);

//Ab agar humein mutability maintain karni hai and hum chahte hain objects and arrays ki value na change ho jisse hamara original array and object safe rahe to uske liye hum use karenge (...) = spread operator which is used to separate the elements of the array/objects and transfer into the new array.
//example:-
function modifyArray(arrCopy){
    arrCopy.push(99); //changing the array 
    console.log("Inside Function: ",arrCopy);
}
let originalArray=[1,2,3,4];
modifyArray([...originalArray]); //yahan humne spread operator use kiya hai ye kya karega ye originalArray ki ek copy of elements pass karega as a argument because of 'separate operator'. isse benefit hua ki hamara original value safe hai parameter change hone ke baad bhi. aur isko hamesha use karenge to square brackets ke andar hi use karenge.
console.log("Original Array: ",originalArray);

//working of 'this' keyword and function binding..
const personDetails = {  
    name: "Mohit",
    greet: function(){
        console.log('Hello, '+ this.name); //this ka matlab hota hai current object ko refer karna. Jab aap object ke andar koi function likhte ho to 'this' us object ko point karta hai jis object me wo likha hua hota hai.
        //this kaam aise karta hai - jaise yahan pe hum call karte hain object ke andar function ko to this automatically person object ko refer karta hai.

//person ek object hai
//greet us object ka property hai
//aur us property ka value ek function hai
//greet ek function hai and object ke andar likha hua hai to use kehte hain 'method' hamesha jab bhi koi function kisi object ke andar likha hoga to wo method kehlayega.
    }
};
//calling the function through object
personDetails.greet(); //calling the greet function -> kyuki object ke kisi bhi value ko access karne ke liye hum [object name.key] likhte hain but yahan pe name ki value greet function me padi hai isiliye direct [objectname.key] access kar liya humne.

//Function Binding in javascript
const Person={
    name: "Mohit",
    greet: function(){
        console.log('Hello,' + this.name); //yahan this jo hai wo iss current object(person) ko refer kar raha hai.
    }
};
//creating another object 
const anotherPerson={
    name: "Lucky"
};
//accessing the object 
const greetFn = Person.greet.bind(anotherPerson); //ab dekho humne another object ko pehle object ke saath bind kar diya isse hua ye ki 'this' ab pehle wale obejct ko refer na krke ab doosre wale object ko refer karega jisse 'this.name' ki value 'Mohit' na hoke 'Lucky' ho jayegi. iska mtlb ki objects ki values change ho jati hai agar bind kar denge to and ye 'bind' permanently bind karte hain.
//Bind karne ke 3 main tareeke hain:-
//1- call()
//2- apply()
//3- bind() - ye humne upar dekh hi liya hai
const greetFnC = Person.greet.call(anotherPerson); //ye temporary base pe bind karta hai permanently nahi karta
const greetFnA = Person.greet.apply(anotherPerson); //ye temporary base pe bind karta hai permanently nahi karta
greetFn();

//forEach() loop or method - Ye JS mein ek array method hai jo har element par ek bar callback run karta hai. aur ye higher-order method bhi hai ye kisi doosre function (callback function) ko input leta hai and usse kaam karne ke liye chalata hai.
//return value:- ye hamesha undefined return karta hai, iske result ko hum kisi variable me store nahi kar sakte.
//Modifies original array:- Nahi, ye original array ko modify nahi karta jab tak hum khud array ke indexes ko manual mutate na karein.
//A Callback is a function passed as an argument to another function.
//Isme break/continue work nhi karte error aayega kyuki isko hum beech me stop nahi kar sakte.
//In JS, Functions ko hum as a parameter bhi paas kar sakte hain and return bhi kara sakte hain ye bilkul allowed hai JS mein.

//Why do we use forEach() method:-
//1- It is easy to read and understand.
//2- It is less code to write.
//3- It is more efficient than for loop.
//4- forEach() array ke har element pe callback function ko call karta hai and ye hamesha original array ke elements pe hi kaam karta hai and iski help se hum original array ke elements ko modify bhi kar sakte hain.
//5- ye hamesha undefined return karta hai agar iske result ko kisi variable me store karne ki koshish karenge to error aayega. isiliye hum isko kisi variable me store nahi karte hain. hum isko direct hi use karte hain.
//6- isme loop ki tarah limit lagane ki jarurat nahi padhti hai and icrement/decrement statement ki bhi jarurat nahi padhti hai ye automatic hi saare elements pe iterate kar leta hai and stop bhi automatically ho jaata hai saare elements pe iterate karne ke baad. isiliye ye loop ki tarah kaam karta hai but ye loop nahi hai ye ek method hai jo array ke elements pe kaam karta hai.

//Example 1: 
let nums=[10,20,30];
nums.forEach(function(value , index){
    console.log(`Index: ${index} = Value: ${value}`);
});

//Using arrow function:
let fruitsName = ["Apple" , "Banana" , "Mango"];
fruitsName.forEach((fruit, index)=>{ //forEach ek method hai isko direct use nahi kar sakte dot laga ke kisi object ya DS ke saath hi isko access kar sakte hain. and 'fruit' yaha pe ek variable hai jo ki array ke elements ko represent kar raha hai.
    console.log(fruit, index);
});

//Array ke andar hum object store kar sakte hain.
//Lekin, Array khud key-value pairs ka structure nahi hota, wo ordered list hota hai.
//some more array methods:-
//forEach() method jo hai wo array ka hi family member hai and ye map, filter, reduce bhi array ke hi methods hain joki -> array.prototype ke andar aate hain.
//map() , filter() , reduce().
//map() - ye ek aisa method hai jo array ke har element pe ek callback function ko call karta hai and uske result ko ek naye array me store karta hai and return karta hai. ye original array ko modify nahi karta hai. ye hamesha ek naya array return karta hai jisme modified values hoti hain. and ye data ko transform bhi karta hai. iske result ko hum kisi variable me store kar sakte hain.  
//Kaam: Array ke har element par jaakar usko change/transform karta hai.
//Return Value: Naya Array (Jiski length HAMESHA original array jitni hi hoti hai).
//Rule: Callback ke andar se return karna compulsory hai.

const Numbers=[1,2,3,4,5]; //Original array ko modify nahi karega. data ko transform krke new array me return karega.
const doubled = Numbers.map(num => num*5); //data transform kiya na yahan pe and ab iske result ko ye naye array me daal dega.
console.log(doubled);

//Filter:- 
//Kaam: Array ke har element par jaakar condition check karta hai. Agar condition true hui toh element ko select kar leta hai.
//Return Value: Naya Array (Sirf selected/pass hone wale elements ka jo true hote hain).
//Rule: Callback ke andar se boolean condition (true/false) return hoti hai.

const filterNumbers=[1,2,3,4,5,6,7,8];
const findEven = (Num) =>{
    return Num%2===0;
};
const even = filterNumbers.filter(findEven); //callback function - findEven
console.log("Even Numbers after filtering the array: ",even);

//Reducue:-
//Kaam: Poore array ke saare elements ko combine/accumulate karke ek single output banana.
//Return Value: Single Value (Number, String, Object, ya Naya Array).
//Rule: Do main cheezein leta hai — accumulator (acc) aur currentValue (curr), plus ek initialValue.

//Array ka total sum nikalna:-
const numbersSum=[1,2,3,4,5];
//syntax
//array.reduce(accumulator , currentValue) => accumulator + currentValue , initialValue);
const totalSum = numbersSum.reduce((Prev , Curr) => Prev + Curr); //jab bhi single line arrow function hoga to humein '}' and 'return' likhne ki jarurat nahi hai aise hi ho jaayega, single line arrow function to.
console.log("Total Sum of the elements are: ",totalSum);
//To basically jab bhi humein array ke saare elements ko combine karke koi ek single value chahiye ho like 'sum' of array to hum hamesha 'reduce' use karenge

//To find the maximum number from the array using reduce method:-
const findMax = [9,12,45,32,56,76,1,2,7];
const maxNum = findMax.reduce((Prev , Curr) => {
    //Using ternary operator
    return (Prev > Curr)? Prev : Curr;
});
console.log("Maximum number from the array is: ",maxNum);

//find() — Pehla Matching Element Dhoondna
//Kyun use hota hai: Jab tumhe poore array me se kisi condition par fit hone waala pehla (first) element dhoondhna ho.
//Return value: Pehla matching element (agar nahi mila toh undefined).

const userData =[ //creating an array
    { id: 1 , name: "Mohit"},
    { id: 2 , name: "Lucky"},
    { id: 3 , name: "Krish"}
];
const listData = [1,2,3,4,5,6,7,8,9];
//ID = 2 wala search karna hai poore array mein
const userFind = userData.find(u=> u.id===2); //print the true value
const userFind2 = userData.find(u=> u.id===4); //agar condition false ho jaye and element na mile to ye undefined return karega.
console.log(userFind);
console.log(userFind2); //undefined
console.log(typeof userData);
console.log(typeof listData);
console.log(Array.isArray(listData)); //for checking the correct type of data in array.

/*1. Object Kya Hota Hai?
Variables aur Arrays sirf single values ya unki list hold karte hain. Real world me jab hume kisi cheez ki poori profile banani hoti hai (jaise Student, Product, User), toh hum Object use karte hain.

Yeh data ko key : value pairs me store karta hai.*/

const userDetai = {
    name: "Rahul",
    age: 22,
    isLoggedIn: true,
    skills: ["JS", "React"]
};

/*2. Properties Access, Add & Delete Kaise Karein?

Isme do tareeke hote hain:

Dot Notation (obj.key): Normal properties ke liye.
Bracket Notation (obj["key"]): Variable waali keys ya space waali keys ke liye.*/

const personDetai = {
    name: "Amit",
    "user role": "Admin" //jab bhi humein space deke koi bhi key name likhna hota hai to hamesha hum usko double quotes me likhte hain. otherwise error aayega.
};

// Accessing Values
console.log(person.name);          // Dot Notation -> "Amit"
console.log(person["user role"]);   // Bracket Notation -> "Admin" jab bhi kisi Key name me space hota hai to usko hamesha square bracket notation ke saath access karte hain. otherwise error aayega.

// Dynamic Key Access (Jab key kisi variable me store ho) to variable wali keys ko bhi access karne ke liye hamesha square brackets ka use karte hain.
const myKey = "name";
console.log(person[myKey]);        // Output: "Amit" (person.myKey kaam nahi karega)

// Add & Update
person.age = 25;                   // New key add hui
person.name = "Amit Sharma";       // Value update hui

// Delete Property
delete person["user role"];        // Key remove ho gayi

/*3. Object Methods & this Keyword

Jab kisi object ke andar function likha jaye, toh use Method bolte hain.
Object ke andar uski apni properties ko use karne ke liye this keyword lagate hain (this matlab "yeh current object").*/

const bankAccount = {
    holder: "Priya",
    balance: 5000,

    // Method
    showDetails: function() { //this function is a method
        // 'this.holder' ka matlab is object ka holder name 
        console.log(`Holder: ${this.holder}, Balance: ₹${this.balance}`); //this refers to it's current object means this iss bankAccount wale current object ko refer karega.
    }
};

bankAccount.showDetails(); // Output: Holder: Priya, Balance: ₹5000

/*⚠️ Important: Object method ke liye normal function() use karna safe hota hai. Arrow function () => {} me this object ko point nahi karta.*/

/*4. Static Object Utility Methods (keys, values, entries)
Real-world API responses ko process karne ke liye in teeno ka sabse zyada use hota hai:*/

const product = { name: "Laptop", price: 40000, brand: "Dell" };

// 1. Object.keys() -> Saari Keys ka Array
console.log("Array of all the keys present: ",Object.keys(product)); 
// Output: ["name", "price", "brand"]

// 2. Object.values() -> Saari Values ka Array
console.log("Array of all the values present: ",Object.values(product)); 
// Output: ["Laptop", 40000, "Dell"]

// 3. Object.entries() -> Key-Value pairs ka Array
console.log("Array with all key-value in the form of pair: ",Object.entries(product)); 
// Output: [ ["name", "Laptop"], ["price", 40000], ["brand", "Dell"] ]
alert("HEllo Alert!"); //creating a alert pop up
