JavaScript is a programming language used to create dynamic content for websites. It is a lightweight, cross-platform, and single-threaded programming language. It's an interpreted language that executes code line by line, providing more flexibility.

Client Side: On the client side, JavaScript works along with HTML and CSS. HTML adds structure to a web page, CSS styles it, and JavaScript brings it to life by allowing users to interact with elements on the page, such as actions on clicking buttons, filling out forms, and showing animations. JavaScript on the client side is directly executed in the user's browser.

Server Side: On the Server side (on Web Servers), JavaScript is used to access databases, file handling, and security features to send responses, to browsers.

Interpreted language: Code is executed line by line.
Dynamically typed: Variable types are determined at runtime.
Single-threaded: Executes one task at a time (but supports asynchronous operations).

<html>
<head></head>
<body>
    <h1>Check the console for the message!</h1>
    <script>
        // This is our first JavaScript program
        console.log("Hello, World!");
    </script>
</body>
</html>

The<script> tag is used to include JavaScript code inside an HTML document.

console.log() prints messages to the browser's developer console. Open the browser console to see the "Hello, World!" message.

"Hello World" Program in Server Console
We can also print the "Hello World" program directly into the console terminal without embedding it into HTML. Create an index.js file and add the code to it.

console.log("Hello, World!");
Run it in your terminal with:

Features of JavaScript:-
Here are some key features of JavaScript that make it a powerful language for web development:

Client-Side Scripting: JavaScript runs on the user's browser, so it has a faster response time without needing to communicate with the server.

Versatile: Can be used for a wide range of tasks, from simple calculations to complex server-side applications.

Event-Driven: Responds to user actions (clicks, keystrokes) in real-time.

Asynchronous: It can handle tasks like fetching data from servers without freezing the user interface.

Rich Ecosystem: There are numerous libraries and frameworks built on JavaScript, such as React , Angular , and Vue.js, which make development faster and more efficient.

Client Side and Server Side nature of JavaScript:-

JavaScript's flexibility extends to both the client-side and server-side, allowing developers to create complete web applications. Here’s how it functions in each environment:-

Client-Side: Involves controlling the browser and its DOM (Document Object Model). Handles user events like clicks and form inputs. Common libraries include AngularJS, ReactJS, and VueJS.

Server-Side: Involves interacting with databases, manipulating files, and generating responses. Node.js and frameworks like Express.js are widely used for server-side JavaScript, enabling full-stack development.

Programming Paradigms in JavaScript:-

JavaScript supports both imperative and declarative programming styles:

Imperative Programming : Focuses on how to perform tasks by controlling the flow of computation. This includes approaches like procedural and object-oriented programming, often using constructs like async/await to handle asynchronous actions.

Declarative Programming : Focuses on what should be done rather than how it’s done. It emphasizes describing the desired result, such as with arrow functions, without detailing the steps to achieve it.

Adding Javascript in HTML Document:-

JavaScript can be included in an HTML document to make web pages interactive and dynamic. It allows you to handle user actions, update content without reloading the page, and control browser behavior.

JavaScript can be added using the <script> tag either inside the HTML file or as an external file.
It is commonly placed in the <head> or just before the closing </body> tag for better performance.
External JavaScript files help keep code organized and reusable across multiple pages.

Inline JavaScript:-

You can write JavaScript code directly inside the HTML element using the onclick, onmouseover, or other event handler attributes.

<html>
<head></head>
<body>
    <h2>
        Adding JavaScript in HTML Document
    </h2>
    <button onclick="alert('Button Clicked!')">
        Click Here
    </button>
</body>
</html>

Internal JavaScript (Within <script> Tag):-

You can write JavaScript code inside the <script> tag within the HTML file. This is known as internal JavaScript and is commonly placed inside the <head> or <body> section of the HTML document.

1. JavaScript Code Inside <head> Tag: 

Placing JavaScript within the <head> section of an HTML document ensures that the script is loaded and executed as the page loads. This is useful for scripts that need to be initialized before the page content is rendered.

<html>
<head>
    <script>
        function myFun() {
            document.getElementById("demo")
                .innerHTML = "Content changed!";
        }
    </script>
</head>
<body>
    <h2>
        Add JavaScript Code
        inside Head Section
    </h2>
    <h3 id="demo" style="color:green;">
        GeeksforGeeks
    </h3>
    <button type="button" onclick="myFun()">
        Click Here
    </button>
</body>
</html>

2. JavaScript Code Inside <body> Tag:

JavaScript can also be placed inside the <body> section of an HTML page. Typically, scripts placed at the end of the <body> load after the content, which can be useful if your script depends on the DOM being fully loaded.

<html>
<head></head>
<body>
    <h2>
        Add JavaScript Code
        inside Body Section
    </h2>
    <h3 id="demo" style="color:green;">
        GeeksforGeeks
    </h3>
    <button type="button" onclick="myFun()">
        Click Here
    </button>
    <script>
        function myFun() {
            document.getElementById("demo")
                .innerHTML = "Content changed!";
        }
    </script>
</body>
</html>

External JavaScript (Using External File):

For larger projects or when reusing scripts across multiple HTML files, you can place your JavaScript code in an external .js file. This file is then linked to your HTML document using the src attribute within a <script> tag.

<html>
<head>
    <script src="script.js"></script>
</head>
<body>
    <h2>
        External JavaScript
    </h2>
    <h3 id="demo" style="color:green;">
        GeeksforGeeks
    </h3>
    <button type="button" onclick="myFun()">
        Click Here
    </button>
</body>
</html>

Advantages of External JavaScript:

Faster Page Load Times: Cached external JavaScript files don’t need to be reloaded every time the page is visited, which can speed up loading times.

Improved Readability and Maintenance: Keeping HTML and JavaScript separate makes both easier to read and maintain.

Separation of Concerns: By separating HTML (structure) and JavaScript (behavior), your code becomes cleaner and more modular.

Code Reusability: One external JavaScript file can be linked to multiple HTML files, reducing redundancy and making updates easier.

Reference External JavaScript Files:

We can reference an external script in three ways in javascript:

By using a full URL:
src = "https://www.geeksforgeek.org/js/script.js"
By using a file path:
src = "/js/script.js"
Without using any path:
src = "script.js"

'defer' likhne se browser HTML load hone ke sath-sath script ko background mein download karta rehta hai aur HTML load hone ke baad hi JS ko run karta hai -> <script src="right.js" defer></script>

Console in JavaScript:-

The console object provides access to the browser's debugging console (or terminal in Node.js). It is used to log information, debug code, and interact with the runtime environment during development.

Here are the most frequently used methods of the console object:

1. console.log()

The console.log() function logs general information to the console. This is one of the most commonly used methods for debugging in JavaScript.

console.log("Hello, World!");

2. console.error()

The console.error() function in JavaScript Logs error messages to the console. Typically displayed in red. It is used to display an error message on the console.

console.error("This is an error message.");

3. console .warn()

The console. warn() function Logs warnings on to the console to warn the user about certain scenarios, typically displayed in yellow.

console.warn("This is a warning message.");

4. console.info()

The console.info() logs informational messages, which usually appear as standard logs but can be styled differently in some environments. Using the %c flag and passing the style object as the second parameter to the function can be used to style the info message.

console.info('%cThis is a styled info message!', 'color: blue; font-size: 16px; font-weight: bold;');

5. console .table()

console.table() is a method that displays data in a structured table format, making it easier to read and compare. It takes arrays or objects and organizes their properties or elements into rows and columns, helping with debugging or analyzing large or complex datasets.

console.table([{name: "Amit", age: 30}, {name: "Jatin", age: 25}]);

6. console .time() & console .timeEnd()

The console.time() method starts a timer with a specified label, and console.timeEnd() stops the timer and logs the elapsed time in milliseconds. These methods are useful for measuring how long a block of code takes to execute.

console.time('timer1');
function loops() {
    for (let i = 0; i <= 10000; i++) {
​
    }
}
loops()
console.timeEnd('timer1');

7. console.assert()

console.assert() logs an error message if the given condition is false, helping to catch issues during development. If the condition is true, it produces no output.

console.assert(5 > 10, "This assertion failed");

8. console .group() and console.groupEnd()

The console.group() and console.groupEnd() methods let you group related logs together in the console. This makes it easier to organize and read logs, especially when debugging.

console.group('User Information');
console.log('Name: Ritik');
console.log('Age: 30');
console.groupEnd();

9. console.count()

console.count() logs the number of times it has been called with a specific label. It helps track how many times a particular code block or function is executed during runtime.

console.count("countLabel");  
console.count("countLabel"); 
console.count("countLabel");
console.count("countLabel");

10. console.trace()

The console.trace() method outputs a stack trace to the console, showing the path your code took to reach the point where it was called. This helps track the flow of execution and identify where a function was invoked.

function a() {
    b()
}
function b() {
    c()
}
function c() {
    console.trace()
}
a()

Output

c                      @ VM416 : 9
b                      @ VM416 : 6
a                      @ VM416 : 2
(anonymous) @ VM416 : 11

Variables in Javascript:-

1. var (Old School / Purana Tareeqa)
JavaScript jab 1995 me bani thi, tab sirf var hota tha. Yeh bohot hi "dheelam-dhaala" variable hai.

Re-declare: Aap ek hi naam ka variable baar-baar bana sakte ho, JS gussa nahi hoti.

Re-assign: Iske andar ki value jab chahe badal lo.

var juice = "Mango";
var juice = "Apple"; // JS ne koi error nahi diya, purani value ud gayi!
juice = "Banana";    // Value badal bhi gayi

console.log(juice); // Output: Banana
Industry Standard: Aaj ke time par real-world coding me var ka use bilkul nahi kiya jata, kyunki isse bade codes me galti se variables override ho jaate hain aur bugs aate hain.

2. let (Modern / Strict Tareeqa)

ES6 (2015) me JavaScript ko thoda sudhara gaya aur let laya gaya. Yeh thoda samajhdar hai.

Re-declare NO: Ek naam ka dibba ek hi baar banega. Dobara banaya toh error dega.

Re-assign YES: Iske andar ka saaman (value) aap badal sakte ho.

let username = "Raju";
// let username = "Shyam"; // ERROR! JavaScript bolega: "Bhai, username pehle se bana hai."

username = "Baburao"; // Yeh chalega! Value update ho gayi. value ko aap update to kar sakte ho but same variable ko aap dubara declare nahi kar sakte.
console.log(username); // Output: Baburao

3. const (Constant / Strong-Headed)

Yeh ek baar ban gaya toh ban gaya. Isko aap hila nahi sakte.

Re-declare NO: Dobara nahi bana sakte.

Re-assign NO: Iske andar ki value kabhi change nahi ho sakti.

const userEmail = "raju@gmail.com";
// userEmail = "shyam@gmail.com"; // ERROR! Typeerror: Assignment to constant variable.

Var - Function scoped
let - Block Scoped 
Const - Block Scoped 
Both are block scoped variables so the benefit is we can create variable with same name in different different scopes.

--Rules for Naming Convention in javascript--
1- Variable names are case sensitive means aman & Aman both have different meaning in javascript.
2- letter , _(underscore) , $ should be first character.
3- letters, digits, underscore(_), and $ is allowed.
4- Reserved Words cannot be variable names.
5- We are using only camel case which means -> first letter is in small case and second letter is in capital case.
example - fullName , lastName , className , isFollow , totalPrice.
-----------------------------------------------------------------------------------------------------------------------------
x = null; - means declare kiya hai variable but humne jaanke usko khali raakha hai.
y = undefined; - means variable declare to kiya hai but usme koi value store nhi ki hai so it gives undefined error.
-----------------------------------------------------------------------------------------------------------------------------
JAVASCRIPT DATA TYPES:-

JavaScript data types define what kind of values a variable can hold and how those values behave in a program. They determine how data is stored in memory and how operations like comparison, calculation, and conversion work.

Each data type has its own methods and operations that control how it can be used.
Understanding data types helps prevent errors and makes code more efficient and reliable.
JavaScript Data Type Categories
JavaScript data types are categorized into Primitive and Non-Primitive types

Primitive Data Types:-

1- Number
2- String
3- Boolean
4- Null
5- Undefined
6- Symbol
7- BigInt

Non-Primitive Data types:-

1- Object
2- Arrays
3- Function
4- Date Object
5- Regular Expression

Type Conversion and Type Coercion in JavaScript:-

Data types in JavaScript are flexible due to which the type of the variables can be changed when the program runs. Type Conversion and Type Coercion are the two ways through which we can change the data type of the variables from one type to the other.

Type Conversion:-

Type Conversion is the process in JavaScript in which the data type of the variables is converted from one type to another type manually. This is also known as explicit type casting.

1- Performed manually by the programmer.
2- Uses built-in JavaScript methods like Number(), String(), and Boolean().
3- Ensures control over data types in code.

Performing type conversion:-

Performing type conversion means changing a value from one data type to another, such as converting strings, numbers, or booleans when needed in a program.

1. String to Number:

We can convert a string into numbers using the Number() function, parseInt(), and parseFloat() methods.

let s = "123";
let n = Number(s);  // Converts string to number
console.log(n);

2. Number to String:

We can convert a number into a string using String() function or we can concatenate it with an empty string("").

let n = 123;
let s = String(n);  //Converts number to string
console.log(s);

3. Boolean to Number:

We can convert a boolean into a number using Number(), so true becomes 1 and false becomes 0.

let bool = true;
let n = Number(bool);  //Converts boolean to number
console.log(n);

4. Boolean to String:

We can convert boolean into string using String() or by concatenating it with an empty string.

let bool = true;
let s = String(bool);  //Converts boolean to string
console.log(s);

Type Coercion:-

Type coercion is the automatic conversion of one data type to another by JavaScript during operations. This is also known as implicit type casting.

1- Performed automatically by JavaScript.
2- Happens mostly in comparison and arithmetic operations.
3- Can lead to unexpected results if not handled properly.

Examples of Type Coercion:

1. String + Number

JavaScript will automatically or implicitly convert the number to a string if there is the string present in the arithmetic operation.

let n = 5;
let s = "5";
let res = n + s;  // JavaScript converts num to string
console.log(res); 
console.log(typeof(res))

2. Boolean + Number

JavaScript converts the boolean value into a number, true becomes 1 and false becomes 0, when we perform the arithmetic operations.

let bool = true;
let n = 10;
let res = bool + n;  // JavaScript converts boolean to number
console.log(res);

3. Comparison of Different Types

JavaScript convert the two value of data type into the common type when we compare their values.

let s = "10";
let n = 10;
console.log(s == n);  // true, JavaScript converts str to number

4. Boolean Context

Javascript converts non-boolean value into the boolean value when the value is in the if statement.

let s = "";
if (s) {
    console.log("This won't print");  // Empty string is falsy
} else {
    console.log("This will print");  // Empty string is coerced to false
}
--------------------------------------------------------------------------
//DOM (Document Object Model)
/*What is the DOM?
DOM stands for Document Object Model. It’s the browser’s in-memory, tree-shaped representation of an HTML page.

For example, the browser reads this HTML:

<body>
  <h1>Hello</h1>
  <p>Welcome!</p>
</body>

…and represents it as a tree of objects:

document
└── html
    └── body
        ├── h1
        │   └── "Hello"
        └── p
            └── "Welcome!"

JavaScript can use that representation to find, change, add, or remove page elements.

How JavaScript works with the DOM
The browser creates the DOM while loading the page. JavaScript then accesses it through the global document object.

For example, to find the heading and change its text:

<h1 id="title">Hello</h1>

<script>
  const heading = document.querySelector("#title");
  heading.textContent = "Hello from JavaScript!";
</script>

querySelector("#title") finds the element with id="title". Setting its textContent changes the text shown on the page.

You can also update styles or attributes:

heading.style.color = "blue";
heading.setAttribute("title", "This is the page heading");

Responding to user actions
The DOM lets JavaScript respond to events such as clicks, typing, and form submissions.

<button id="greetButton">Click me</button>
<p id="message"></p>

<script>
  const button = document.querySelector("#greetButton");
  const message = document.querySelector("#message");

  button.addEventListener("click", () => {
    message.textContent = "You clicked the button!";
  });
</script>

Here’s what happens:

1- JavaScript finds the button and paragraph in the DOM.
2- It registers a click-event listener on the button.
3- When the user clicks, the browser fires the event.
4- The listener runs and updates the paragraph’s DOM element.
5- The browser displays the updated page.

Adding new elements
JavaScript can create and add elements, too

const newItem = document.createElement("li");
newItem.textContent = "Learn the DOM";

document.querySelector("ul").appendChild(newItem);

Why do we need the DOM?
Without the DOM, JavaScript would have no standard way to work with the page’s content and structure. The DOM makes it possible to:

1- Update text, styles, and attributes without reloading the page
2- React to user actions
3- Show or hide content
4- Build menus, forms, lists, and other interactive features
5-Add or remove page elements dynamically

In short: HTML provides the page structure, the browser turns it into the DOM, and JavaScript uses the DOM to make the page interactive.

For scripts that need to find page elements, place the <script> near the end of <body> or load it with defer:
<script src="script.js" defer></script>

With the help of defer browser HTML ki rendering ko stop nahi karta jabtak JS load nhi ho jaati wo background me saath ke saath JS ko download karta rehta hai and HTML rendering ko continue rakhta jisse page loads fast hota hai.
Always make sure ya to aap script ko body closing tag se pehle rakhein ya fir defer ka use karein and defer ka jab use karenge aap script tag ko head ke andar likhenge jisse browser ko pehle hi JS file mil jaaye aur wo background me JS file ko download karna shuru kar de and saath hi neeche poore HTML ko saath ke saath parse bhi karta rahe jisse time bachega aur page fast load hoga. Waise to aap defer use krke script ko kahin bhi rakh skte ho but sabse best jagah head tag ke andar rakhna hi hai.

Benefits of using defer in JS:-
1- Fast Page load
2- No DOM Errors
3- Safe for Dependencies => agar script2 pehle chalne ke liye script1 pe depoend hai to defer dono ka order sahi rakhta hai.
4- Head Tag me safe use
5- Best for Application Logic 

JavaScript can use the DOM to:

1- Find elements
2- Read or change text
3- Change styles and attributes
4- Add or remove elements
5- Respond to clicks, typing, and other events

The DOM is not the HTML file itself. It is the browser’s live, in-memory representation of the page. If JavaScript changes the DOM, the browser updates what the user sees.

JavaScript me is pure ped ko access karne ka ek hi rasta hota hai: document variable.
Agar document nahi hota, toh JS ko pata hi nahi hota ki screen par kya chal raha hai.

Step 3: Screen par kisi cheez ko pakadna (Selecting Elements)
JavaScript se screen par kisi cheez ka rang badalna hai ya text change karna hai, toh sabse pehla kaam kya hai? Usko ungli dikha kar pakadna.

Maan lo tumhare paas ye HTML hai:

HTML
<h1 id="heading">Hello World</h1>
<p class="description">Ye pehla paragraph hai</p>
<p class="description">Ye doosra paragraph hai</p>
<button id="btn">Click Me</button>

1. ID se pakadna (querySelector with #):
ID pure page me ek hi hoti hai (jaise tumhara Roll Number).

JavaScript
const mainHeading = document.querySelector("#heading");
console.log(mainHeading); // Output: <h1 id="heading">Hello World</h1>
Yahan # ka matlab hai: "Browser, ID dhundho jiska naam 'heading' hai."

2. Class se pakadna (querySelector with .):
Class bohot saari cheezon ki same ho sakti hai (jaise class me sabne 'blue shirt' pehni ho).

JavaScript
const pehlaPara = document.querySelector(".description");
Dhyan se suno: Page par do <p class="description"> the. Lekin querySelector hamesha sirf sabse pehle wale ko pakadta hai aur wahi ruk jata hai.

3. Saari ek jaisi cheezon ko ek sath pakadna (querySelectorAll):
Agar tumhe dono paragraph pakadne hain:

JavaScript
const saarePara = document.querySelectorAll(".description");
console.log(saarePara);
Yeh tumhe dega ek NodeList (ek list/array jisme dono paragraph bandhe honge).

Step 4: Pakadne ke baad uske sath chhed-chhaad karna (Manipulating)
Ab tumne element ko pakad liya. Ab tum uske sath kya-kya kar sakte ho?

1. Text badalna:
JavaScript
const heading = document.querySelector("#heading");

// Text badal do:
heading.textContent = "Welcome to Backend Engineering!";

2. Styling badalna:
JavaScript
// Direct CSS lagana:
heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "30px"; // JS me font-size nahi, camelCase (fontSize) likhte hain
Lekin industry me element.style direct bohot kam use karte hain, kyunki aise code ganda ho jata hai. Industry me hum Class lagate aur hatate hain.

3. Class lagana aur hatana (classList):
Socho tumne CSS me ek class pehle se bana rakhi hai:

CSS
.danger {
    color: red;
    font-weight: bold;
}

Ab JS se us class ko button ya text par jab marzi chipkao ya hatao:

JavaScript
const heading = document.querySelector("#heading");

heading.classList.add("danger");    // Class lag gayi (text laal ho gaya)
heading.classList.remove("danger"); // Class hat gayi (normal ho gaya)
heading.classList.toggle("danger"); // Switch ki tarah: lagi hai toh hata dega, nahi hai toh laga dega
Step 5: Naya Element Banana aur Screen par Chipkana (Sabse Important)
Ab socho tum Instagram bana rahe ho. Jab koi naya comment karta hai, toh wo comment HTML file me pehle se likha nahi hota. JavaScript us comment ka box banati hai aur screen par chipkati hai.

Ye 3 steps me hota hai:

Step 1: Memory me dabba banao
JavaScript
const nayaComment = document.createElement("p");
// Abhi ye sirf browser ki RAM me bana hai, screen par kisi ko nahi dikh raha

Step 2: Us dabbe me maal bharo (Text aur Style)
JavaScript
nayaComment.textContent = "Bhai tutorial bohot badiya hai!";
nayaComment.classList.add("comment-style");

Step 3: Screen par kisi parent ke andar chipkao (appendChild ya append)
Maan lo screen par ek box hai <div id="comment-box"></div>:

JavaScript
// Pehle us box ko pakdo
const commentBox = document.querySelector("#comment-box");

// Uske andar naya comment daal do
commentBox.appendChild(nayaComment);
// BUM! Ab ye screen par dikhne laga.
Ab ek bar khud socho (Checkpoint)
Agar tumhe screen par ek naya button jodna ho jisme likha ho "Delete Account" aur uska background red ho, toh tum kya karoge?

document.createElement("button") se button banaoge.

Uska text textContent = "Delete Account" karoge.

Us par class ya style lagaoge.

document.body.appendChild(...) se screen par chipkaoge.
