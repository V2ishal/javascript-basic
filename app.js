//Q2 palindrome
let str=["madam"];

let palindrome="";
for(let i=0; i<str.length; i++){

    if(str[i]===str[str.lenght-1-i]){
      palindrome="true";
    }
    else{
        palindrome="false";
    }
}
console.log(palindrome);
