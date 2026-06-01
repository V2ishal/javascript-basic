//q5 first non reapeating char in string
let str = "swiss";

let result = "";

for (let i = 0; i < str.length; i++) {
    let count = 0;

    for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
            count++;
        }
    }

    if (count === 1) {
        result = str[i];
        break;
    }
}

console.log(result);