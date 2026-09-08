// first non repeating char in string using method
let str="swiss";
let result="";
for(let ch of str){
    if(str.indexOf(ch)===str.lastIndexOf(ch)){
        result+=ch;
        break;
    }
}
console.log(result);

