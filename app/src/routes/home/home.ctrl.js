"use strict";

const users = {
    id: ["tivo", "tivos", "shy"],
    password: ["1234", "1234", "123456"]
};

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    }
};

const process ={
    login : (req, res) => {
        const id = req.body.id;
        const pwd = req.body.pwd;

        console.log(id, pwd);
        console.log(req.body);

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === pwd){
                return res.json({
                    success: true,

                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
        });
    }
};



module.exports = {
    output,
    process
};