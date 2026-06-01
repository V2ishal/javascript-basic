//Q 4 duplicate remove using include method
let str="abbcdde";
let result="";

for(let ch of str){

    if(!result.includes(ch)){
        result+=ch;
    }
}
console.log(result);