//Q 1 string reverse
let str=[1,2,3,4,5];

for (let i = 0; i<str.length/2; i++){
    let temp=str[i];
    str[i]=str[str.length-1-i];
    str[str.lenght-1-i]=temp; 
}
console.log(str);
