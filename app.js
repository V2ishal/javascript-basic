//q5 duplicate remove not using method
let str="proggrram";
let result="";
for(let i=0; i<str.length; i++){
   let ch=str[i];
   let found="false";

   for(let j=0; j<result.length; j++){
      if(result[j]===ch){
         found="true";
         break;
      }
   }
   if(found==="false"){
   result+=ch;
}
}
console.log(result);


