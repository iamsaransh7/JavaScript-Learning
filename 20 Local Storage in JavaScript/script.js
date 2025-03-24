const userName = document.getElementById("userName");
const button = document.getElementById("submitBtn");
const userNameDynamic = document.getElementById("userNameDynamic");

button.addEventListener('click', () => {
    localStorage.setItem('username', userName.value);
});

window.addEventListener('load', () => {
    const value = localStorage.getItem('username');
    userNameDynamic.innerText = value;
});