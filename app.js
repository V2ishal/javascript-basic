// first non repeating char in string using method
let str="swiss";
let result="";

for(let i=0; i<str.length; i++){
if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
    result+=str[i];
    break;
}
}
console.log(result);

