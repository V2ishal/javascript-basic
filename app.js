// string is plaindrome or not
let str="madam";
let palindrome="true";
for(let i=0; i<str.length; i++){
   if(str[i]!==str[str.length-1-i]){
    palindrome="false";
   }
}
console.log(palindrome);

