const header = document.querySelector("header");

// const signupBtn = document.querySelector(".signupBtn");
// const loginBtn = document.querySelector(".loginBtn");
// const moveBtn = document.querySelector(".moveBtn");
// const signup = document.querySelector(".signup");
// const login = document.querySelector(".login");


window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// loginBtn.addEventListener("click", () => {
//     moveBtn.classList.add("rightBtn");
//     login.classList.add("loginForm");
//     signup.classList.remove("signupForm");
//     moveBtn.innerHTML = "Login";
// });

// signupBtn.addEventListener("click", () => {
//     moveBtn.classList.remove("rightBtn");
//     login.classList.remove("loginForm");
//     signup.classList.add("signupForm");
//     moveBtn.innerHTML = "Signup";
// });

// 

