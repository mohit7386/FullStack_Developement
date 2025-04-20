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

<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Submit</button>
</form>

📚 Step 4: Special Concepts
Semantic Tags (Very Important for Real-World)
Semantic tags se browser aur developers dono ko structure samajh aata hai.


Tag	Purpose
<header>	Top ka hissa — jaise navbars ya titles.
<footer>	Bottom ka hissa — jaise copyright.
<section>	Content ka alag section.
<article>	Blog post ya article content.
<nav>	Navigation links ke liye.
