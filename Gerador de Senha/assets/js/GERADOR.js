let sliderElement = window.document.querySelector("#slider");
let button = window.document.querySelector("#button");

let sizePassword = window.document.querySelector("#valor");
let password = window.document.querySelector("#password");

let containerPassword = window.document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()* n))
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPass(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}