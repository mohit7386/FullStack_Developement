// //Q 1. -> Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with full name length. for example if the user enters "john doe" then the username should be "@johndoe8". Display the generated username to the user.
// let fullName = prompt("Enter your full name: "); //prompt() method is used to take input from the user. It returns a string value. If the user clicks on cancel button then it returns null. If the user clicks on ok button without entering any value then it returns an empty string.
// let cleanName = fullName.replaceAll(' ', ''); //find all spaces from the string and replace them with empty string. It returns a new string with all spaces removed. It does not change the original string.
// console.log(`Your generated username is: @${cleanName}${cleanName.length}`);
// console.log(`Original String: ${fullName}`); //This is our original string which is not changed by the replaceAll() method. It returns the original string.

//LINEAR SEARCH:-
//Q 2. Given an array, arr[] of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.
let arr2=[1,2,3,4];
let x=3;
let found = false;
for(let i = 0;i<arr2.length;i++){
    if(arr2[i]==x){
        console.log(i);
        found = true;
        break;
    }
}
if(!found){
        console.log("-1");
    }

//Q 3. Given an arr[] of elements of size n, return the largest element given in the array.
let arry=[10,20,50,30,40];
let maxEle=arry[0]; 
for(let larEle of arry){
    if(larEle > maxEle){
       maxEle=larEle;
    }
}
console.log("Largest element: ",maxEle);

//Q 4. Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.
//Note: If the second largest element does not exist, return -1.

let findSecLar=[-10,-20,-40,-25,-50,-30];
let max1 =0;
let max2=0;
if(findSecLar[0]>findSecLar[1]){
    max1=findSecLar[0];
    max2=findSecLar[1];
}
else{
    max1=findSecLar[1];
    max2=findSecLar[0];
}
for(let i=2;i<findSecLar.length;i++){
    if(findSecLar[i]>max1){
        max2=max1;
        max1=findSecLar[i];
    }
    else if(findSecLar[i] > max2){
        max2 = findSecLar[i];
    }
}
console.log("Largest element in the array: ",max1);
console.log("Second Largest element in the array: ",max2);

//Q 5. Write the function which calculates the sum of 2 numbers entered by the user:-
// function findSum(a ,b){ // these are the parameteres (a and b) and these are local variables means they are block scoped kewal function ke block ke andar hi access kiye ja sakte hain block se bahar access karne par error aa jaayega.
//       let sum = 0;
//       sum+=a+b;
//       return sum; //agar hamara kaam sirf screen par output show karna hai to hum kewal console.log ke saath kar sakte hain return ki need nahi hai but agar hum kuch calculations kar rahe hain aur unn calculations ka use hume baad me karna hai apne code me database me to hume value ko return karana padega jisko hum baad me kahin bhi use kar payein. otherwise agar hum return nahi lagate hain to value return nahi hogi and code me undefined aayega output.
// }
// let a=Number(prompt("Enter the first number: ")); //Number is used so that ki console number ko number le like agar humne a = 5 and b = 6 bheja to wo usko '56' aisa na kar de isiliye.
// let b=Number(prompt("Enter the second number: ")); //a and b scope se bahar declare hain to same variable lene par error nahi aayega. 
// console.log("The sum of a and b is: ",findSum(a,b)); //these are arguments (a and b) jo hum values pass karte hain and jo isme values pass karte hain wo copy hoke parameteres me jaati hain and function ke andar agar a and b ko change karenge to outer wali values change nahi hongi.

//Q 6. Write a function to calculate the tax:-

function calculateTax(price) {
    let tax = price * 0.18;
    return tax; //agar hamara kaam sirf screen par output show karna hai means kewal print karna hai to hum kewal (console.log) ke saath kar sakte hain return ki need nahi hai but agar hum kuch calculations kar rahe hain aur unn calculations ka use hume baad me karna hai apne code me database me to hume value ko return karana padega jisko hum baad me kahin bhi use kar payein. otherwise agar hum return nahi lagate hain to value return nahi hogi and code me undefined aayega output.
}

let totalTax=calculateTax(1000); // Output screen par dikhega: Tax amount is: 180 aur yahan pe bhai tax ki value ko hum naye totalTax variable me use kar rahe store kar rahe hain and jab bhi humein apni calculation ya result ko kisi variable me store karna hota hai then hum hamesha usko return karate hain apne function mein then print karate hain. isiliye return lagana jaruri hai otherwise (undefined) output show karega.
console.log("Tax amount is: " + totalTax);

//Q 7. Create a function that takes a string as an argument and returns the count of the vowels in the string.

const numOfVow = (countVow) => {
  const vowels = "aeiou"; //vowels naam ka varible bana liya jisme vowels store kara diye.
  const found = []; //creating empty array jisme hum unique vowels store karenge.
//   let count = 0;

  for (let char of countVow.toLowerCase()) { //for of loop for iterating the each character of the string. and toLowercase se saare characters ko lowercase me badal liya jisse "A" and "a" me conflict na ho isiliye.
     if (vowels.includes(char)) { //includes method check karta hai ki kya har 'character' 'vowel' string me hain present ya nahi. (Ye compare kar rha hai string ke har character ko vowel wali string se)
      if (!found.includes(char)) { //ye unique elements stored karata hai check karta hai ki kya jo character wo compare kara raha hai wo pehle se found me hai ya nahi. and '!' operator laga hai to that means ki agar wo character pehle se array me nahi hai agar nahi hai to true ho jayegi ye and 'push' method ki help se add kar denge array me uss character ko. (Duplicate elements nahi ayenge array me isiliye aisa kiya)
        found.push(char);
      }
    }
  }
  console.log("Total no. of vowels:",found.length); //isme jitne elements hain jo vowel hain string me unki length print ho jayegi.
  console.log("Vowels present:", found.join(", ")); //.join() method array ke elements ko string me convert kar detaa hai isiliye use karte hain.
};
//let resultVow = prompt("Enter any string: ");
//numOfVow(resultVow);
numOfVow("Apna College");

//Q 8. Username Checker:-

function checkUsernameLength(username) {
    if (username.length > 6) {
        return "Valid Username";
    } else {
        return "Too Short";
    }
}
//calling the function
let resultUserLength=checkUsernameLength("Mohit Pratap Singh");
console.log(resultUserLength);

//Q 9. Mini Discount Finder:- (Using Single line Arrow Function)

const miniDiscountFinder = (price) => (price * 10)/100; //in single arrow functions we don't need to write the return keyword and braces. JS automatic karti hai dono kaam agar single arrow function hai to.
//calling the function using variable 
let netDiscount=console.log(miniDiscountFinder(58));

//Q 10. Max of 2 numbers (Using Single line Arrow functions)

const maxOfTwoNumbers =(num1 , num2) => {
    if(num1>num2){
        return num1;
    }
    return num2;
};
//calling the function 
let resultOfNum= maxOfTwoNumbers(12,5);
console.log(`which is greater: ? ${resultOfNum}`);

//Q 11. Find the all items present in the array with their indexes using for of loop.
//for of loop generally used of iterable objects to give the values not indexes but if you want the index also using for of loop then you can use 'enteries()' method it helps to iterate each index of the item. and [index , item] - it gives item and item index. 
const colors = ["red", "green", "blue"];

for (const [index, color] of colors.entries()) { 
  console.log(`Position ${index} contains ${color}`);
}

//Sample Example of for of loop using entries in objects:-
const userDetails = {Name: "Mohit" , Age: 26 , Designation: "Software Engineer"};
console.log(Object.entries(userDetails)); //for objects we write "Object.entries(Object name)" to access the each [Key , Value] pair.

//Q 12. Target Sum Pair (Two Sum)Problem: Ek function banao findPair(arr, target).Task: Yeh function ek array aur ek target number lega. Aapko array me aise do numbers dhoondhne hain jinko plus (+) karne par target mile. Wo dono numbers ek array me return karo. Agar koi pair na mile toh null return karo.Example: findPair([1, 4, 45, 6, 10, 8], 16) Output: [6, 10] (Kyunki $6 + 10 = 16$). Then find the indexes of the target elements.
//creating a function using arrow function:-
const calTwoSum = (arrTwoSum, target) => {
    for (const [i, num] of arrTwoSum.entries()) { //.entries() humein index return karke de rahi hai and first loop ka current index
        for (const [j, other] of arrTwoSum.entries()) { //ye second loop ka current index
            if (i !== j && num + other === target) { //ye 'i!==j' humne isiliye lagaya jisse i and j same index values carry na kar lein because inner loop bhi 0 se hi chal raha hai so, isiliye humne ek condition de di ki 'i!==j' hoga tabhi jaake ye same index values carry nahi karega 
                return {
                    Values: [num, other], //and ye values and positions isko object ki form me likha hai and yahan 'values' and 'positions' koi bhi keyword ya in-built functions nahi hain ye aisa hum kar sakte hain return ke saath koi error nahi aayega.
                    Positions: [i, j] //i and j me indexes pade hain and num and other me uss index pe jo item hai wo present hai.
                }; 
            }
        }
    }
    return null; //agar match na mile to return null use karenge poora array check hone ke baad and else ka use hum yahan pe nahi kar sakte kyuki wo fir har bar chalega chahein condtion true ho ya na ho wo run hoga hi hoga isiliye poora array check hone ke baad humne loop se bahar return null laga dia agar match na mile to and isko neeche handle kar lenge.
};
//creating a sample array
const sampleArray = [1, 4, 45, 6, 10, 8];
const result = calTwoSum(sampleArray, 18);
console.log(result); // null because 18 cannot be made by any two different elements
//and result ko neeche yahan isiliye likha kyuki agar hum isko upar likhte to not defined aata isiliye neeche likha
if (result !== null) { //agar ye true ho jayegi means match mila to print kara dega return ki value ko.
    console.log(`Values: ${result.Values}`); 
    console.log(`Positions: ${result.Positions}`);
} else {
    console.log("No matching pair found.");
}

/*Q 13. Find the Missing NumberProblem: Ek function banao findMissing(arr, n).Task: Aapko $1$ se lekar $n$ tak ke numbers ka ek array milega, lekin usme se ek number gayab (missing) hoga. Array sorted nahi hai. Aapko wo gayab number dhoondh kar return karna hai bina kisi built-in sort method ke.Example: findMissing([1, 2, 4, 6, 3, 7], 7) (Yahan $n=7$ hai, yani 1 se 7 tak ginti honi chahiye thi)Output: 5 (Kyunki 5 gayab hai)*/
//dekho logic ye hai ki hum sabse pehle sum of first (1 to n) natural numbers nikalenge fir jo sum aayega usme se given array ke sum ko minus kar denge to humein missing number mil jaayega. and (n*(n+1))/2 => ye formula calculate karta hai sum of natural numbers from 1 to n.
const findMissing = (arr, n) => {
    const expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (const value of arr) {
        actualSum += value;
    }
    return expectedSum - actualSum;
};
//Calling the function
const missingResult = findMissing([1, 2, 4, 6, 3, 7], 7);
console.log("Missing number is:", missingResult); // Output: 5

/*Q 14. Remove Duplicates (Bina extra space ke)Problem: Ek function banao removeDuplicates(arr).Task: Ek sorted array me bohot saare duplicate elements hain. Aapko ek naya array return nahi karna hai, balki usi array ke andar se duplicates hatakar sirf unique elements ka array return karna hai.Example: removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5])Output: [1, 2, 3, 4, 5]
//let's convert this for sorted and unsorted both the arrays:- */

const removeDuplicates=(arr)=>{
 //creating an empty array
let result = [];
for(let i=0;i<arr.length;i++){ //main array isme hai saare elements
    let isDuplicate = false;
    for(let j=0;j<result.length;j++){ //now idhar hum empty array me check kar rahe hain ki kya array ka element empty array me hai ya nahi hai ?
        if(arr[i]===result[j]){
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate){
        result.push(arr[i]); //iska mtlb hua ki agar isduplicate false ho jaye aur wo element agar duplicate nai hai to uss main array ke element ko result naam ke array me add kardo.
    }
}
return result; //return karani padegi kyuki hum function se bahar uss value ko use kar rahe hain console.log kar rahe hain....isiliye hamesha agar aisa karenge to return karani padegi value humein hamesha.
};
//calling the function
let finalResult= removeDuplicates([1,2,3,1,3,2,4,5,6,7,8,6]);
console.log("After Removing Duplicates from the array: ",finalResult);

/*Q 15. Rotate Array K-Times (Right side) me rotate karna Problem: Ek arrow function banao rotateArray(arr, k).Task: Ek array ko right side me k baar shift (rotate) karna hai.Example: rotateArray([1, 2, 3, 4, 5], 2) (Array ko 2 baar right me ghumao)Round 1: [5, 1, 2, 3, 4]Round 2: [4, 5, 1, 2, 3]Output: [4, 5, 1, 2, 3]*/

const rotateArray = (arr , k)=>{
    //ab ek kaam karte hain array ki ek copy bana lete hain usi me changes karenge jisse original array modify nahi hoga..original array hamara safe rahega.
let rotatedArray = [...arr]; //using spread operator which helps to separate the array elements aur create a copy of an array.
for(let i=0;i<k;i++){
    //So, right Rotate karne ke liye humein array ke last element ko uthake start me daalna hoga
    let lastElementofArray = rotatedArray.pop(); //pop method last element ko remove karta hai array me se and return karta hai removed element ko.
    //ab jo removed (last element) hai usko humein array ke starting me add karna hai jisko hum unshift() array method hai uski help se karenge jo array me element ko start me add karta hai...
    rotatedArray.unshift(lastElementofArray);
}
return rotatedArray;
};
//calling the function:-
console.log("Rotated Array: ",rotateArray([1,2,3,4,5,6] , 4)); //print the rotated array.

/*Q 16. Leaders in an ArrayProblem: Ek function banao findLeaders(arr).Task: Array me se saare "Leaders" dhoondhne hain. Ek element "Leader" tab hota hai jab uske right side wale saare elements usse chhote hon. Array ka aakhiri element hamesha leader hota hai.Example: findLeaders([16, 17, 4, 3, 5, 2])Output: [17, 5, 2] (17 ke right me sab chhote hain, 5 ke right me sab chhote hain, aur 2 aakhiri hai)*/

const leadersArray=(arr)=>{
    //creating an empty array so that original array modify na ho
    let leaders = [];
    let maxFromRight = -Infinity; //Special numeric values in JS that represent positive and negative infinity. [-Infinity means sabse choti value javascript me mtlb isse chota aur kuch nahi ho sakta]
    //[Infinity means sabse badi value JS me mtlb isse badi koi value nhi ho sakti hai].
    
    //array ko traverse karane ke liye loop chalayenge but loop hamesha end element se first element tak run karenge isme. logic yahi hai ki agar koi element leader hai uske baad ke saare element usse chote honge and isme hum reverse loop chalate hain last element se first element tak.
    for(let i = arr.length-1;i>=0;i--){
        if(arr[i] > maxFromRight){
            leaders.push(arr[i]); //agar condition true hoti hai agar maxFromRight se array ka element bada hota hai to usko leaders wale array me add kar denge.

            //and usi element ko 'maxFromRight' me daal denge 
            maxFromRight=arr[i]; 
        }
    }
    //return kar denge leaders array ko reverse karke.
    return leaders.reverse();
};
//calling the function
console.log("Leaders Elements: ",leadersArray([2,5,17,3,4,16])); //print the leaders array

//Q 17. Find the total price of the items in the cart using forEach():-
const products = [ //yahan array ke andar humne elements liye hain but wo elements object ki form me hain alag alag object particular ek element ko represent kar raha hai and uske andar 2 properties hain name and price. and aisa hum bilkul kar sakte hain array ke saath ye bilkul valid hai.
    { name: "Shirt", price: 500}, 
    { name: "Jeans" , price: 2000}, 
    { name: "Shoes" , price: 2500} 
];
let cartTotal = 0;
//creating an arrow function
const callback = (product) => {
    cartTotal += product.price;
};
//yahan dekho humne ek callback naam ka arrow function create kiya and usi arrow function ko humne as a argument pass kar diya forEach method me to isi ko callback function kehte hain. and forEach() method array ke har element pe call hota hai and uske andar jo bhi function pass karenge wo har element pe call hoga.
products.forEach(callback); //aur yahi forEach() ki working hai ki ye array ke har element pe ek xcd                                          callback function ko call karega and uske andar jo bhi logic hoga wo har element pe apply hoga.
console.log("Total Price of the items in the cart Value: ",cartTotal);

//Q 18. Array Processing with forEach():- find the total deposit and total withdraw amount in the account using forEach() method.

const transactions =[500,-200,1200,-400,300,-100]; //Positive values represents deposit in the account and negative values represents withdraw from the account.
let totalDeposit = 0;
let totalWithdraw = 0;

transactions.forEach((transaction) => {
      if(transaction > 0){
        totalDeposit+=transaction;
      } else {
        totalWithdraw+=Math.abs(transaction);
      }
});
console.log("Total Deposit Amount in your account: ",totalDeposit);
console.log("Total Withdraw Amount from your account: ",totalWithdraw);

//Q 19. Frequency Counter with reduce():-
const votes = ["BJP", "INC", "BJP", "AAP", "INC", "BJP", "AAP"];

const voteCount = votes.reduce((accumulator, party) => {
    accumulator[party] = (accumulator[party] || 0) + 1;
    return accumulator;
}, {});

console.log("Vote Count:", voteCount);

//Q 20. Product of Array Except Self using map():-
function productExceptSelf(nums) {
    const n = nums.length;

    // output array banaya jisme har index par left-side product store hoga first pass mein.
    const output = new Array(n).fill(1);

    // First pass: left product accumulate karte hain.
    // output[i] mein sabse pehle us index se left side ke saare elements ka product store karenge.
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
        // ab leftProduct next index ke liye use hoga.
    }

    // Second pass: right product accumulate karte hain.
    // output[i] ko right side product se multiply kar denge.
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return output;
}

// Example output: har position par current element ko chhod ke baaki sab ka product milta hai.
console.log("Product Except Self:", productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]

// Alternate approach using reduce + map:
function productExceptSelfWithMapReduce(nums) {
    const n = nums.length;

    // left[i] = product of all elements before index i.
    const left = nums.reduce((acc, value, index) => {
        if (index === 0) {
            acc.push(1);
        } else {
            acc.push(acc[index - 1] * nums[index - 1]);
        }
        return acc;
    }, []);

    // right[i] = product of all elements after index i.
    const right = new Array(n);
    nums.reduceRight((acc, value, index) => {
        right[index] = acc;
        return acc * value;
    }, 1);

    // final output: left[i] * right[i]
    return nums.map((value, index) => left[index] * right[index]);
}

console.log("Product Except Self with reduce/map:", productExceptSelfWithMapReduce([1, 2, 3, 4]));

//Q 21. We are given an array of marks of students. Filter out of the marks of students that scored 90+.
const stuMarks = [
    { name: "Tony Stark", marks: 99},
    { name: "Peter Parker", marks: 87},
    { name: "Thor", marks: 95},
    { name: "Spiderman", marks: 76}
];
const highScores=stuMarks.filter(student => student.marks>=90);
console.log("Students who scored 90+ marks: ",highScores);
//also calaculate the total scores of the students 
const totalMarks = stuMarks.reduce((Prev , Curr) => {
   return Prev+Curr.marks;
},0);
console.log("Total marks of the students: ",totalMarks);

//Q 22. Ek E-commerce backend data mila hai:

/*const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Phone", price: 20000, inStock: false },
  { name: "Earbuds", price: 2000, inStock: true },
  { name: "Watch", price: 5000, inStock: true }
];
Task:
Chaining (filter().map()) ka use karo:

Pehle un products ko filter karo jo inStock: true hain.

Un in-stock products par 10% discount apply karke ek naya array return karo jisme sirf name aur discountedPrice ho.

Expected Output:
[{ name: "Laptop", discountedPrice: 45000 }, { name: "Earbuds", discountedPrice: 1800 }, { name: "Watch", discountedPrice: 4500 }]*/

const productsList = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Phone", price: 20000, inStock: false },
  { name: "Earbuds", price: 2000, inStock: true },
  { name: "Watch", price: 5000, inStock: true }
];

const discountedProducts = productsList.filter(product => product.inStock) //ye kya karega ye filter karega productsList me se sirf un products ko jisme inStock true hai.
.map(product => ({ /*ye kya karega ye map karega un filtered products ko aur unke andar sirf name and discountedPrice return karega new array mein.*/
    name: product.name , discountedPrice: product.price * 0.7 //ye kya karega ye calculate karega discounted price ko 10% discount ke saath.
}));
//calling the function
console.log("Products List with 10% Discount: ",discountedProducts);

//Q 23. Cart Total with reduce():-
/*const cart = [
  { product: "Shoes", price: 2000, quantity: 2 },
  { product: "Shirt", price: 1000, quantity: 3 },
  { product: "Jeans", price: 3000, quantity: 1 }
];
Task:reduce() ka use karke pooray cart ka Total Bill Amount calculate karo (Price $\times$ Quantity har item ka).
Expected Output: 9000*/
const cart = [
  { product: "Shoes", price: 2000, quantity: 2 },
  { product: "Shirt", price: 1000, quantity: 3 },
  { product: "Jeans", price: 3000, quantity: 1 }
];
//reduce ka kaam hota hai "ek value ko accumulate karna"-> yani ek starting value se shuru karke har element ke baad usko update karna.
const totalBill = cart.reduce((accumulator, item) => { //accumulator data ko store karta hai aur initial value jo denge wahi accumulator ki first value hogi and agar initial value na dein aur kewal accumulator return karayein to first element return hoga bas. kyuki jab hum isko initital value nahi dete hain to ye first element ki value ko store kar leta hai.
//item = current product yani current element ko refer kar raha hai
//and initital value yahan pe 0 isiliye li kyuki sum kara rahe hain hum aur sum me hum 0 se start karte hain aur accumulator ki value 0 rehti hai to current jo start hoga wo pehle element se hoga array ke.
  return accumulator + item.price * item.quantity;
},0);

console.log("Total Cart Bill Amount:", totalBill);

// Q 24. Custom polyfills for map, filter, and reduce without using built-in methods
// Ye teen functions aise likhe gaye hain jaise JS internally map/filter/reduce ko implement kar sakta hai.

function myMap(arr, callback) {
    // naya array banaya jisme transformed values store hongi.
    let result = [];

    // array ke har element par ek-ek kar ke loop chalayenge.
    for (let i = 0; i < arr.length; i++) {
        // callback ko current element, index, aur original array pass karte hain.
        // callback ka return value hume transformed value deta hai.
        let transformedValue = callback(arr[i], i, arr);

        // transformed value ko result array mein add karte hain.
        result[result.length] = transformedValue;
    }

    // result array return karte hain jisme map ka final output hoga.
    return result;
}

function myFilter(arr, callback) {
    // filter ke liye ek khali array banate hain jisme sirf pass karne wale elements rakhenge.
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        // callback se pata karein ki current element pass hota hai ya nahi.
        // agar callback true return kare to element result mein daalte hain.
        if (callback(arr[i], i, arr)) {
            result[result.length] = arr[i];
        }
    }

    // result array return karte hain jisme filter ka output hota hai.
    return result;
}

function myReduce(arr, callback, initialValue) {
    // accumulator ko initialize karne ke liye variable banaya.
    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        // agar initialValue diya gaya hai to accumulator ko ussi se start karenge.
        accumulator = initialValue;
        startIndex = 0;
    } else {
        // agar initialValue nahi diya gaya hai to first element ko accumulator bana dete hain.
        if (arr.length === 0) {
            // agar array empty ho aur initialValue bhi nahi diya gaya ho to error throw karna sahi hai.
            throw new TypeError("Reduce of empty array with no initial value");
        }
        accumulator = arr[0];
        startIndex = 1;
    }

    // loop startIndex se arr.length tak chalayenge.
    for (let i = startIndex; i < arr.length; i++) {
        // callback se naya accumulator value banate hain.
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    // final accumulated value return kar dete hain.
    return accumulator;
}

// Example usage: myMap
const originalNumbers = [1, 2, 3, 4];
const doubledNumbers = myMap(originalNumbers, function (value, index, array) {
    // value = current element, index = current position, array = originalNumbers
    return value * 2; // har value ko 2 se multiply karke return kar raha hai.
});
console.log("myMap output:", doubledNumbers); // [2, 4, 6, 8]

// Example usage: myFilter
const mixedNumbers = [10, 5, 8, 3, 12];
const largeNumbers = myFilter(mixedNumbers, function (value) {
    // sirf un numbers ko pass karein jo 7 se bade hain.
    return value > 7;
});
console.log("myFilter output:", largeNumbers); // [10, 8, 12]

// Example usage: myReduce
const sumOfNumbers = myReduce([1, 2, 3, 4], function (acc, value) {
    // acc = previously accumulated value, value = current element
    return acc + value;
}, 0);
console.log("myReduce output:", sumOfNumbers); // 10

// Example without initialValue for reduce
const productOfNumbers = myReduce([2, 3, 4], function (acc, value) {
    return acc * value;
});
console.log("myReduce without initialValue output:", productOfNumbers); // 24

//Q 25. Dynamic Key Access)Ek function banao getFieldValue(obj, keyName). Yeh function kisi bhi object aur key ka naam lega aur us key ki value return karega. Agar wo key object me na mile, toh "Key Not Found" return kare.Example: getFieldValue({ name: "Rahul", age: 24 }, "age") // Output: 24

const getFieldValue = function(obj, keyName) {
    //Jab dynamic keys ko access karna ho check karna ho to hamesha use krenge 'in' operator ko and iska matlab hota hai ki ye check karega ki koi property object ke andar exist karti hai ya nahi karti hai. 
    //and iska syntax hota hai => property in Obj [where property refers to the Key in the object] 
    if (keyName in obj) {
        return obj[keyName]; //and jab bhi object ke andar dynamic keys ko access karna ho to hamesha square bracket ka use karte hain.
    }
    return "Key Not Found";
}
//printing on the console
console.log(getFieldValue({ name: "Rahul", age: 24 }, "age")); // 24
console.log(getFieldValue({ name: "Rahul", age: 24 }, "salary")); // Key Not Found

//Q 26. Medium - ATM Logic using this)
// Ek account object banao jisme:Properties: owner (String), balance (Number).Methods:deposit(amount): Balance me amount add kare aur "Deposited: X, New Balance: Y" log kare.withdraw(amount): Agar balance >= amount ho, toh minus karke updated balance log kare. Agar kam ho, toh "Insufficient Balance" log kare.

//creating an Account Object 
const accountDetails = {
    name: "Mohit",
    balance: 230000,
    //creating a function/method
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}, Available Balance: ${this.balance}`);
    },
    withdraw(amount){
        if(this.balance >= amount){ //agar bank balance bada hai jitna amount nikalna chah rahe hain usse tbhi to wo nikaal payega.
            this.balance -= amount;
            console.log(`withdrawn: ${amount}, Available Balance: ${this.balance}`);
        } else 
            console.log("Insufficient Balance");
    }
};
//calling the functions:-
//object ke andar ke functions ko access karne ke liye hum (.) Dot use karte hain.
accountDetails.deposit(50000); //Deposit in account
accountDetails.withdraw(170000); //Withdraw Balance 
accountDetails.withdraw(320000); //Insufficient Balance 

//Q 27. Calculate Total & Average)
/*Backend se student ke marks ka object mila hai:

const marks = {
  maths: 80,
  science: 90,
  english: 70,
  hindi: 85
};

Object.values() aur Object.keys() ka use karke:

Total Marks calculate karo.
Average Marks calculate karo.
Consoles log me print karo: "Total: X, Average: Y".*/

const studMarks = {
    maths: 80,
    science: 90, 
    english: 70,
    hindi: 85,
};
const values = Object.values(studMarks); //isse object ke values ka data ka ek array mil gaya.
const keys = Object.keys(studMarks); //isse object ke keys ka data ka array mil gaya.

const totalStudMarks = values.reduce((sum, mark)=> sum + mark,0);
const average = totalStudMarks/keys.length;

console.log(`Total Marks: ${totalStudMarks}, Average Marks: ${average}`);

//math methods:-
console.log(Math.max(10, 50, 20)); // Output: 50

// Array ke andar se Max nikalne ke liye Spread Operator (...) lagate hain:
const scores = [45, 89, 23, 99];
console.log(Math.max(scores)); // yahan hume spread operator use karna hoga kyuki math.max array ko number me convert karne ka try karega jisse NaN error aayega isiliye yahan spread operator use karenge hum. kyuki spread operator array se values nikal ke numbers me convert kar deta hai.




