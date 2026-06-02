//Q 6 String compression (bonus 🔥)Same characters ko count karke short form me likhte hain
let str="aaabbc";
let result="";
let count=1;

for(let i=0; i<str.length; i++){

    if(str[i]===str[i+1]){
       count++;
    }
    else{
        result+=str[i]+count;
        count=1;
    }
}
console.log(result);

