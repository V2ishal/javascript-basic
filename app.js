
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
//q3 count vowels in string using for of loopes
// let str="vishal";
// let count=0;

// for(ch of str){

//    if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"){
//       count++
//    }
// }
// console.log(count);