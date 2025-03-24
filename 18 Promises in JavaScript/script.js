let a = 10;
let b = 20;
let result = a + b;

async function getData(){
    let resultFromServe = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(await resultFromServe.json());
}

// let resultFromServer = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
// );

getData();

console.log(result);

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });