// 1- Mini-Project E-Commerce Product Filter, Search & Cart Engine

//Ye project e-commerce websites (Jaise Amazon/Flipkart) ka core logic engine hai. Hum ek raw product dataset denge, aur tumhe 4 Core Utility Functions banaye hain using Level 2 features (map, filter, reduce, sort, includes, ES6+).

/*🎯 Functional Requirements (Task Definition):
Task 1: Search System (searchProducts(query))Ek function banao jo search string (query) lega aur un products ka array return karega jinke name me wo search query aati ho (Case-insensitive hona chahiye!).
Example: searchProducts("shoes") -> Nike aur Adidas shoes wale products return kare.

Task 2: Category & Stock Filter (filterProducts(category, minRating))
Ek function banao jo sirf un products ko filter kare jo:
1- Specified category se hon (e.g., "Electronics").
2- Unki rating >= minRating ho.
3- Wo inStock: true hone chahiye!

Task 3: Price Sorting System (sortProducts(productList, order))Ek function banao jo products array aur order string ("asc" ya "desc") lega."asc" par price chote se bada sort kare, "desc" par bade se chota. (Original products array mutate nahi hona chahiye, Spread operator [...] use karke new array par sort chalana).

Task 4: Cart Summary Calculator (calculateCartTotal(cartItems))Cart data aisa milega:JavaScriptconst cart = [
  { productId: 1, quantity: 2 }, // iPhone 15 (80000 x 2)
  { productId: 5, quantity: 3 }  // JS Book (1200 x 3)
];
reduce() ka use karke cart ke items ka total price calculate karke return karo! (Hint: products array me se id dhoondhne ke liye find() use karo).*/

//📦 Initial Dataset (Is par kaam karna hai):

const products = [
  { id: 1, name: "Apple iPhone 15", category: "Electronics", price: 80000, rating: 4.8, inStock: true },
  { id: 2, name: "Samsung Galaxy S24", category: "Electronics", price: 75000, rating: 4.6, inStock: true },
  { id: 3, name: "Nike Air Force Shoes", category: "Fashion", price: 9000, rating: 4.2, inStock: false },
  { id: 4, name: "Adidas Running Shoes", category: "Fashion", price: 6000, rating: 4.0, inStock: true },
  { id: 5, name: "JavaScript Mastery Book", category: "Books", price: 1200, rating: 4.9, inStock: true },
  { id: 6, name: "Sony WH-1000XM5 Headphones", category: "Electronics", price: 28000, rating: 4.7, inStock: false },

];

  //creating a search system query:-
 const searchProducts = (query) =>{
  const lowerQuery = query.toLowerCase(); //convert kar liya query jo pass karenge uske saare characters ko lower case me jisse lower and upper case ka conflict na ho.
  return products.filter(product => product.name.toLowerCase().includes(lowerQuery)); //includes method ek array method hai jo check karta hai ki kya koi value uss array me pehle se hai ya nahi?
  };
console.log(searchProducts("Shoes"));

  //creating a category & Stock filter:-
  const filterProducts = (category , Rating)=>{
    const conlowercategory = category.toLowerCase();
      let filteredResult = products.filter(product => product.category.toLowerCase().includes(conlowercategory) && product.rating >=Rating && product.inStock); //method chaining kar rahe hain multiple methods ko ek saath (.) ke saath use kar rahe hain.
      return filteredResult;
  };
  console.log(filterProducts("Electronics" , 1))

 //Price Sorting system:-
const sortProducts = (productList, order) => {
  return [...productList].sort((a, b) => { //using spread operator jisse original array modify na ho.
    if (order === "asc") return a.price - b.price; //"asc" and "desc" are the indicators to string jo batata hai ki ye isse ascending karo aur isse descending karo.
    if (order === "desc") return b.price - a.price;
    return 0;
  });
};
console.log(sortProducts(products, "asc")); // Products ko price se chote→bade
console.log(sortProducts(products, "desc")); // Products ko price se bade→chote

//Cart Summary Calculator:-
const cart = [
  { productId: 1, quantity: 2 }, // iPhone 15 (80000 x 2)
  { productId: 5, quantity: 3 }  // JS Book (1200 x 3)
];
const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((total, cartItem) => {
    const product = products.find(p => p.id === cartItem.productId);
    if (!product) return total;
    return total + product.price * cartItem.quantity;
  }, 0);
};
console.log("Total Cart Value: ",calculateCartTotal(cart));