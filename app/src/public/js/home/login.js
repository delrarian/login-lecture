"use strict";

const id = document.querySelector("#id"),
    pasword = document.querySelector("#password"),
    btn_login = document.querySelector("button");

btn_login.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        pasword: pasword.value
    };

    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers :{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    });
}