// Q7 STRING COMPRESSION USING METHOD
let str="aaabbc";
let result="";

for(let i=0; i<str.length; i++){
    let count=1;
    while(str[i]===str[i+1]){
        count++;
        i++;
    }
        result+=str[i]+count;
     
}
console.log(result);

