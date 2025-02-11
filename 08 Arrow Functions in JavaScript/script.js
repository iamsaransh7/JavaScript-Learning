// Syntax
const sayHello = () => {
    console.log("Hey!");
}

sayHello();

const add = (a, b) => {
    return a + b;
}

console.log(add(2,3));

const addV2 = (a, b) => a + b;

console.log(addV2(2,5));

// Arguments keyword caan't be used in arrow funtion
const addNumbers = (...nums) => {
    let ans = 0;
    for(let i=0; i<nums.length; i++){
        ans = ans + nums[i];
    }

    return ans;
}

console.log(addNumbers(1, 2, 3, 4, 5));