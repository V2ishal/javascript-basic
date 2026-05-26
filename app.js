//Q6 vowels count using method
let str="vishal";
let count=0;

for(let i=0; i<str.length; i++){
    let ch=str[i].toLowerCase();

if("aeiou".includes(ch)){
    count++;
}

}
console.log(count);
