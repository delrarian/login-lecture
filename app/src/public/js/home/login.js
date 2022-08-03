"use strict";

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    btn_login = document.querySelector("#button");

btn_login.addEventListener("click", login);

function login(){
    if(!id.value) return alert("아이디를 입력하십시오.");
    if(!password.value) return alert("비밀번호를 입력해 주세요.");

    const req = {
        id: id.value,
        password: password.value
    };
    console.log(req);


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
            if(res.err){
                // logger.error(res.err);
                return alert("서버 문제 다시시도해 주십시오.");
            } 
            alert(res.msg);
        }
    })
    .catch((err) => {
        return alert("캣치 서버 문제 다시시도해 주십시오.");
        console.error("로그인중 에러 발생");
    });
}