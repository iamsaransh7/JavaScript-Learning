// Callback function
function add(a, b, cb){
    let result = a + b;
    cb(result);
}

add(2, 5, (val) => console.log(val));

add(3, 6, function(val) {
    console.log(val);
});


// Returning a function
function mul(a, b, cb){
    let result = a * b;
    cb(result);
    return () => console.log(result);
}

let resultFunction = mul(4, 8, () => {});
resultFunction();