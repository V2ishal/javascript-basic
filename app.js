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
        //count++ is line par hum count++ is liye use nhi h rha because humne count variable ko for loopes ke under declare kiya hai
}
console.log(result);

