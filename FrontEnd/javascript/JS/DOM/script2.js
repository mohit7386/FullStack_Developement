console.dir(document);
console.log(document.body);

//Checking which node is present in the given tag:-
let checkHeading = document.querySelector("h1");
console.log(checkHeading.nodeType); //Output - 1 = Which represents the Element Node.
//accessing elements using JS with the help of DOM 
//1- By Using Id:
var accessheadingusingid= document.getElementById("demo");
console.log(accessheadingusingid);
console.dir(accessheadingusingid); 

var accessheadingusingid = document.querySelector("#demo"); //# symbol reperesents the 'id' a unique identifier and querySelector is also a method to select an element and it is used in industrty but it is slower than 'getElementById'.
console.log(accessheadingusingid)
console.dir(accessheadingusingid) //dir used to print the properties , methods of document object.

//2- By Using Class:
let headings = document.getElementsByClassName("heading");
console.log(headings);
console.dir(headings);
//let myheadings = document.querySelector(".heading");
//console.log(myheadings); //agar multiple headings ya pararaphs hon jisko humein select karna hai to query selector class keliye use karenge to wo sirf sabse pehle wale element ko pakadta(Select) karta hai aur wahi ruk jata hai.
//agar sabko select karna hai to use krenge - 'querySelectorAll' ye sab kuch select kar lega ek saath.
let myheadings = document.querySelectorAll(".heading");
console.log(myheadings); //It returns array of NodeList of all headings.

//3- By Using Tag Name:
let mytags= document.getElementsByTagName("p");
console.log(mytags);
console.dir(mytags);