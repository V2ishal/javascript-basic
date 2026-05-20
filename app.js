// string is plaindrome or not
let str="vishal";
let palindrome="true";

for(let i=0; i<str.length/2; i++){

   if(str[i]!==str[str.length-1-i]){
      palindrome="false";
      break;
   }
}
console.log(palindrome);



