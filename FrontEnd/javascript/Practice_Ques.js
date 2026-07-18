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
