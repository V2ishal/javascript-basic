//q5 duplicate remove using include method
let str="proggrram";
let result="";

for(let i=0; i<str.length; i++){
   let ch=str[i];

   if(!result.includes(ch)){
      result+=ch;
   }
}
console.log(result);


