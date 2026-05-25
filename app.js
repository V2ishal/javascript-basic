
//Q2 string is palindrome or not?
let str="madam";
let palindrome="string is palindrome";

for(let i=0; i<str.length/2; i++){
  
   if(str[i]!==str[str.length-1-i]){
      palindrome="string is not palindrome";
      break;
   }
}
console.log(palindrome);
//he