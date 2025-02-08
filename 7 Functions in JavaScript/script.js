// Functions
function sayHello() {
    console.log("Hey! Saransh");
}

sayHello();

// Parameters
function add(a, b) {
    console.log(a + b);
}

add(2, 5);

function multiply(a, b) {
    return a * b;
}

let res = multiply(2, 5);
console.log("Result:", res);

// Unlimited Arguments
function addNumbers() {
    let ans = 0;
    
    for(let i=0; i<arguments.length; i++){
        ans = ans + arguments[i];
    }

    return ans;
}

function addNumbersV2(...numbers) { //Spread Operator
    let ans = 0;
    
    for(let i=0; i<numbers.length; i++){
        ans = ans + numbers[i];
    }

    return ans;
}

let result = addNumbers(1, 2, 5, 7, 11);
console.log("Sum of Numbers:", result);

let result2 = addNumbersV2(1, 2, 5, 7, 11);
console.log("Sum of Numbers:", result2);