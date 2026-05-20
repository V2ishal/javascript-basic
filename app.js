//q3 count vowels in string using for of loopes

let str="vishal";
let count=0;

for( ch of str){

   if(ch==="a"|| ch==="e"||ch==="i"|| ch==="o"|| ch==="u"){
      count++;
   }
}
console.log(count);