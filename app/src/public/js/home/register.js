"use strict";

const id = document.querySelector("#id"),
    names = document.querySelector("#name"), 
    password = document.querySelector("#password"),    
    password_confirm = document.querySelector("#password-confirm"),
    btn_register = document.querySelector("#button");

btn_register.addEventListener("click", register);

function register(){
    const req = {
        id: id.value,
        name: names.value,
        password: password.value,
        password_confirm: password_confirm.value
    };
    console.log(req);

    fetch("/register", {
        method: "POST",
        headers :{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        } else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}