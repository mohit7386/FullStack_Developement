-----------------------------------FULL STACK DEVELOPMENT------------------------------------
___HTML ->

1.1 What is HTML?
HTML (HyperText Markup Language) ek markup language hai na ki programming language, jisme hum webpage ka structure banate hain.
Jaise body ka skeleton hota hai, waise website ka skeleton HTML hai.

Real-world use:

Web page ka structure banate hain.

SEO friendly pages ke liye.

Forms, headings, paragraphs, links, buttons sab HTML se.

📚 1.2 Basic Structure of HTML Page

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is my first web page.</p>
</body>
</html>

✅ Explanation:


Tag	Use
<!DOCTYPE html>	Browser ko batata hai ki HTML5 page hai
<html>	Root of HTML document
<head>	Meta info like title, charset, SEO tags
<body>	Jo dikhai deta hai user ko screen pe


📚 1.3 Important HTML Tags
(Real use wale)


Tag	Purpose
<h1> to <h6>	Headings (SEO ke liye important)
<p>	Paragraphs
<a href="url">	Links
<img src="path" alt="text">	Images
<ul>, <ol>, <li>	Lists
<table>, <tr>, <td>, <th>	Tables
<form>, <input>, <textarea>, <button>	Forms
<div>	Division, layout banane ke liye
<span>	Inline element
<section>, <article>, <header>, <footer>, <nav>	Semantic tags (SEO Friendly)

Step 3: Core HTML Tags - Real World Use ke Saath
1. Headings (<h1> to <h6>)
Webpage me headings hoti hain — jaise newspaper me hoti hain badi choti headings.

<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
<h1> sabse badi heading hoti hai.

<h6> sabse chhoti.

SEO ke liye bhi important hote hain headings (ranking me help karta hai).

2. Paragraph (<p>)
Body me simple text likhne ke liye.

<p>This is a normal paragraph of text.</p>

3. Anchor (<a>)
Kisi dusre page pe ya dusre website pe link karne ke liye.

<a href="https://www.google.com" target="_blank">Visit Google</a>
href attribute se link dete hain.

target="_blank" ka matlab link new tab me khulega.

4. Image (<img>)
Webpage me photo lagane ke liye.

<img src="https://via.placeholder.com/150" alt="Placeholder Image">
src me photo ka link ya path.

alt me photo ka description (agar photo load nahi ho to text dikhe).

5. List (<ul> / <ol> and <li>)
Bulleted ya numbered list banane ke liye.

Unordered List:

<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Eggs</li>
</ul>

Ordered List:

<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Go to gym</li>
</ol>

6. Buttons (<button>)
Actions perform karwane ke liye — jaise "Submit", "Click me".

<button>Click Me</button>

7. Forms (<form>, <input>, <label>, <textarea>, <select>)
User se data lena — jaise login/signup form.

Attributes in Button:

Attribute	Kaam:->
type="submit"	Form submit karne ke liye (default type in forms)
type="reset"	Form reset karne ke liye
type="button"	Normal button (kuch karwane ke liye with JavaScript)

Example:

<form>
  <input type="text" placeholder="Enter Name">
  <button type="submit">Submit</button>
  <button type="reset">Clear</button>
</form>

Forms ->

<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Submit</button>
</form>

 Important Tags:

Tag	Purpose
<form>	Form ka container
<label>	User ko input field ka description dikhana
<input>	Single line input field
<textarea>	Multi-line input (comments, messages)
<select>	Dropdown banane ke liye
<option>	Select ke andar ek ek item
📌 Input Types:

Type	                Usage
text	     ->    Normal text field
email	     ->    Email field (valid email format check karta hai)
password	 ->    Password field (text hide karta hai)
checkbox	 ->    Multiple select karne ke liye
radio	     ->    Single select among options
file	     ->    File upload karne ke liye

Example:

<label for="gender">Gender:</label>
<input type="radio" id="male" name="gender" value="male"> Male
<input type="radio" id="female" name="gender" value="female"> Female

📌 textarea Example:

<label for="message">Message:</label>
<textarea id="message" name="message" rows="5" cols="30"></textarea>

📌 select Example:

<label for="country">Country:</label>
<select id="country" name="country">
  <option value="india">India</option>
  <option value="usa">USA</option>
  <option value="uk">UK</option>
</select>


📚 Step 4: Special Concepts
Semantic Tags (Very Important for Real-World)
Semantic tags se browser aur developers dono ko structure samajh aata hai.


Tag	Purpose
<header>	Top ka hissa — jaise navbars ya titles.
<footer>	Bottom ka hissa — jaise copyright.
<section>	Content ka alag section.
<article>	Blog post ya article content.
<nav>	Navigation links ke liye.
------------------------------------------------------------------------------------
 HTML Tables (Jo reh gaya tha)
Table ka use hota hai data ko row aur column me organize karne ke liye.

Basic Table Syntax:

<table border="1">
  <tr>  <!-- Table Row -->
    <th>Name</th>   <!-- Table Header -->
    <th>Age</th>
  </tr>

  <tr>
    <td>John</td>  <!-- Table Data -->
    <td>25</td>
  </tr>

  <tr>
    <td>Alice</td>
    <td>30</td>
  </tr>
</table>

Output:

Name	Age
John	25
Alice	30
Important Tags in Table:

Tag	Meaning
<table>	Table banata hai
<tr>	Table Row
<th>	Table Heading (Bold & Centered)
<td>	Table Data

2. Audio in HTML
Audio embed karne ke liye <audio> tag use hota hai.

Syntax:

<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>

✅ Important:

controls likhna zaruri hai, warna player dikhai nahi dega.

<source> tag se hum file attach karte hain.

3. Video in HTML
Video embed karne ke liye <video> tag use hota hai.

Syntax:

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
✅ Important:

controls likhna compulsory.

Width height define kar sakte ho.

Format mostly .mp4 ka use hota hai.

4. iFrame in HTML
Iframe ka use kisi doosri website, video, map ko apni website me embed karne ke liye hota hai.

Syntax:
<iframe src="https://www.wikipedia.org/" width="600" height="400"></iframe>

✅ Example: YouTube Video Embed

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>

✅ Important:

src me jo cheez dikhani hai uska link aata hai.

width, height se size control karte hain.

allowfullscreen se full screen enable hota hai.

5. Miscellaneous - Other important things

Tag	Use
<abbr>	Short form ke liye. Hover pe pura naam dikhega
<mark>	Highlight karne ke liye
<progress>	Progress bar dikhane ke liye
<details> aur <summary>	Collapsible content banane ke liye

📢 Short Examples:

1. Abbreviation (<abbr>):

<p><abbr title="World Health Organization">WHO</abbr> is an organization.</p>
(Hover karoge to "World Health Organization" dikhega.)

2. Mark (<mark>):

<p>This is a <mark>highlighted</mark> text.</p>

3. Progress Bar:

<progress value="70" max="100"></progress>
(Dekhega jaise 70% complete.)

4. Details + Summary:
<details>
  <summary>Click to expand</summary>
  <p>This is hidden content revealed on click.</p>
</details>
===========================================================================================
CSS Kya Hota Hai?
🔵 CSS ka full form hai:

Cascading Style Sheets

🔵 CSS ka kaam hota hai:

HTML structure ko style dena (colors, layouts, size, animation, etc.)

Jaise ki:

Font ka size change karna

Background color dena

Borders lagana

Layout banana

Hover effect banana

Animation banana

HTML ➔ Structure
CSS ➔ Style / Decoration

Step 2: CSS Lagaane ke 3 tareeke hote hain:

Tareeka	Kya hota hai?	Example
1. Inline CSS	Direct HTML ke andar style dena	<p style="color:red;">Hello</p>
2. Internal CSS	<style> tag ke andar likhna	<style> p { color: blue; } </style>
3. External CSS	Alag file bana ke link karna	<link rel="stylesheet" href="style.css">
✅ Industry me External CSS use karte hain (professional method)

Step 3: CSS Syntax kaise likhte hain?
🔵 CSS syntax ka basic structure:

selector {
   property: value;
}

Example:

p {
   color: red;
   font-size: 20px;
}

Yaani:

p ➔ kis element ko style dena hai (selector)

color ➔ kya property change karni hai

red ➔ property ki value kya deni hai

Step 4: Selectors in CSS
Selectors se hum decide karte hain kisko style dena hai.


Selector Type	                     Example	              Meaning
Universal	                          * {}	         Sabhi elements ko style
Element	                            p {}           Specific tag ko
Class	                     .className {}	         Class wale elements ko
ID	                          #idName {}	         ID wale elements ko
Grouping	                 h1, p, div {}	         Ek sath multiple elements ko
Nested	                        div p {}	         Div ke andar ke p ko

✅ Class and ID ka use industry me hota hai sabse jyada.

Step 5: Properties (Most Important CSS Properties)
Basic Styling Properties:
color

background-color

font-size

font-family

font-weight

text-align

margin

padding

border

width

height

Layout / Positioning Properties:
display

flex

grid

position

top, left, right, bottom

z-index

Others:
box-shadow

border-radius

opacity

overflow

transition

transform

Step 6: CSS Example (Small Demo)
HTML:

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Welcome Bhai!</h1>
<p>This is a paragraph.</p>

</body>
</html>

style.css:

body {
  background-color: #f0f0f0;
}

h1 {
  color: darkblue;
  text-align: center;
}

p {
  color: green;
  font-size: 18px;
}
==================================================================================================
CSS Specificity:- 
Inline - Most Powerful override all the Styling
Internal - Least powerful then Inline CSS but override the styling of the External CSS
External - Very Lower Powerful but this is fully used in industries and creating multipages websites.

CSS Specificity defines with the help of these rules:-> 
1- Position
2- Specificity
3- Type
4- Importance

Position->    
  li{
  color: red;
  color: orange;   //so here orange baad me hai to position iski lower hai to rule of CSS Specificity jo lower style hoga wahi style mana jaayega aur wahi color add ho jaayega.
}

Specificity->



