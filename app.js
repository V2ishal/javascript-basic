// floyed s triangle
let n=5;
let count=1;

for(let i=1; i<=n; i++){
let add="";
    for(let j=1; j<=i; j++){
        add+=count;
        count++;
    }
    console.log(add);
}

