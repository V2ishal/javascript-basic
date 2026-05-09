
//⚡ Next (Q7):
// total marks find karo
//Expected:
//80 + 90 = 170
//Hint 😏:
//student.marks.math + student.marks.science
// let student={
//     name:"vishal",
//     marks:{
//         math:80,
//         science:90
//     }
// };
// console.log(student.marks.math+student.marks.science);

//object ke andar function add karo:
//Expected:
//greet() → "Hello Vishal"

//Hint 
//function ko object ke andar likhte hai
//this.name use karna

let student={
    name:"vishal",
    marks:{
        math:80,
        science:90
    },
    greet(){
        console.log("hello vishal");
    }
};
console.log(student.greet());




