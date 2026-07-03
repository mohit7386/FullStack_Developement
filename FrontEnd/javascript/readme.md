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