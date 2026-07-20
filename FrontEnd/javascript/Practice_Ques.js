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

/*1. Target Sum Pair (Two Sum)Problem: Ek function banao findPair(arr, target).Task: Yeh function ek array aur ek target number lega. Aapko array me aise do numbers dhoondhne hain jinko plus (+) karne par target mile. Wo dono numbers ek array me return karo. Agar koi pair na mile toh null return karo.Example: findPair([1, 4, 45, 6, 10, 8], 16)Output: [6, 10] (Kyunki $6 + 10 = 16$)

2. Find the Missing NumberProblem: Ek function banao findMissing(arr, n).Task: Aapko $1$ se lekar $n$ tak ke numbers ka ek array milega, lekin usme se ek number gayab (missing) hoga. Array sorted nahi hai. Aapko wo gayab number dhoondh kar return karna hai bina kisi built-in sort method ke.Example: findMissing([1, 2, 4, 6, 3, 7], 7) (Yahan $n=7$ hai, yani 1 se 7 tak ginti honi chahiye thi)Output: 5 (Kyunki 5 gayab hai)

3. Remove Duplicates (Bina extra space ke)Problem: Ek function banao removeDuplicates(arr).Task: Ek sorted array me bohot saare duplicate elements hain. Aapko ek naya array return nahi karna hai, balki usi array ke andar se duplicates hatakar sirf unique elements ka array return karna hai.Example: removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5])Output: [1, 2, 3, 4, 5]

4. Rotate Array K-TimesProblem: Ek arrow function banao rotateArray(arr, k).Task: Ek array ko right side me k baar shift (rotate) karna hai.Example: rotateArray([1, 2, 3, 4, 5], 2) (Array ko 2 baar right me ghumao)Round 1: [5, 1, 2, 3, 4]Round 2: [4, 5, 1, 2, 3]Output: [4, 5, 1, 2, 3]

5. Leaders in an ArrayProblem: Ek function banao findLeaders(arr).Task: Array me se saare "Leaders" dhoondhne hain. Ek element "Leader" tab hota hai jab uske right side wale saare elements usse chhote hon. Array ka aakhiri element hamesha leader hota hai.Example: findLeaders([16, 17, 4, 3, 5, 2])Output: [17, 5, 2] (17 ke right me sab chhote hain, 5 ke right me sab chhote hain, aur 2 aakhiri hai) 

ye itne questions ka logic samajhna hai aur try karna hai karne ka khudse */