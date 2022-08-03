"use strict";

const id = document.querySelector("#id"),
    names = document.querySelector("#names"), 
    password = document.querySelector("#password"),    
    password_confirm = document.querySelector("#password-confirm"),
    btn_register = document.querySelector("#button");

btn_register.addEventListener("click", register);

function register(){
    if(!id.value) return alert("아이디를 입력하십시오.");
    if(password.value !== password_confirm.value) 
    return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        names: names.value,
        password: password.value
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
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원등록 중 에러 발생");
    });
}