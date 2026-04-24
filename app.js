//butterfly pattern 
let n=4;
for(let i=1; i<=n; i++){
let count="";
    for(let j=1; j<=i; j++){
        count+="*";
    }
    let space=2*n-2*i;
    for( let j=1; j<=space; j++){
        count+=" ";
    }
    for(let j=1; j<=i; j++){
        count+="*"; 
    } 
    console.log(count);
}
for(let i=n; i>=1; i--){
    let count="";
    
    for(let j=1; j<=i; j++){
        count+="*";
    }
    let space=2*n-2*i;

    for(let j=1; j<=space; j++){
        count+=" ";
    }
    for(let j=1; j<=i; j++){
        count+="*";
    }
    console.log(count);
}

