// Logical Operators
let age = 11;
let gender = "male"

if(age >= 18 && gender == "male"){
    console.log("Adult Male")
} else if(age < 18 && gender == "male"){
    console.log("Young Boy");
} else if(age >= 18 && gender == "female"){
    console.log("Adult Woman");
} else if(age < 18 && gender == "female"){
    console.log("Young Girl");
} else{
    console.log("Wrong Input");
}


const num = 4;

if(num % 2 == 0){
    console.log("Even")
}