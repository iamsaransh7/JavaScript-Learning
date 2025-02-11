// if else statement
const age = 17;

if (age >= 80) {
    console.log("Yes, you are senior");
}
else if (age >= 18) {
    console.log("Yes, you can vote");
} 
else {
    console.log("No, you can't vote");
}

// Ternary Operator
age >= 18 ? console.log("YES") : console.log("NO");
let result = age >= 18 ? "Yes" : "No";
console.log("Ternary Result:",result);

// Switch Case
const option = 3;

switch (option) {
    case 1:console.log("Namastey!")
        break;
    case 2: console.log("Hello!");
        break;
    case 3: console.log("Bonjor!");
        break;
    default: console.log("Invalid Option");
}