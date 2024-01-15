let loginBtn = document.getElementById('loginBtn');
let registerBtn = document.getElementById('registerBtn');
let registerEl = document.getElementById('register');
let loginEl = document.getElementById('login');
let navMenuEl = document.getElementById('nav-menu');


function login(){
    loginEl.style.left = "4px";
    registerEl.style.right = "-520px";
    loginBtn.classList.add('whiteBtn');
    registerBtn.classList.remove('whiteBtn');
}

function register(){
    loginEl.style.left = "-520px";
    registerEl.style.right = "5px";
    loginBtn.classList.remove('whiteBtn');
    registerBtn.classList.add('whiteBtn');
}

function menuFunction(){
    navMenuEl.classList.toggle('nav-menu-show');
}