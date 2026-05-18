//2 string is palindrome or not
let str="madam";
let palindrome="yes";

for(let i=0; i<str.length/2; i++){

    if(str[i] !== str[str.length-1-i]){
        palindrome="false";
        break;
}
}
console.log(palindrome);

