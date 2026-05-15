// Q2 string palindrome or not?

let str="madam";
let ispalindrome="true";

for(let i=0; i<str.length; i++){

    if(str[i]!==str[str.length-1-i]){
        ispalindrome="false";
        break;
    }
}
console.log(ispalindrome);
