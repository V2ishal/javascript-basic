//Q5 first non repeating char
let str="swiss";
let result="";

for(let i=0; i<str.length; i++){
    let count=0;

    for(j=1; j<str.length; j++){

        if(str[i]==str[j]){
            count++;
        }
    }
    if(count==1){
        result+=str[i];
        break;
    }
}
console.log(result);