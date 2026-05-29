//q4 vowels count using normal for of loopes
let student="nayan";
let count=0;
for(let i=0; i<student.length-1; i++){
    let ch=student[i];
    if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"){
        count++;
    }
}
console.log(count);
