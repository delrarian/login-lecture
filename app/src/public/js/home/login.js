"use strict";

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    btn_login = document.querySelector("button");

btn_login.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        pwd: password.value
    };

    fetch("/login", {
        method: "POST",
        headers :{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/";
        } else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인중 에러 발생"));
    });
}