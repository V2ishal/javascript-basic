//vowels count using method
let student="nayan";
let vowels="aeiouAEIOU";
let count=0;

for(let i=0; i<student.length; i++){
    let ch=student[i];

    if(vowels.includes(ch)){
        count++;
    }
}
console.log(count);

