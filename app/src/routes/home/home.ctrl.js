"use strict";

const UserStorage = require("../../models/UserStoreage")

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
    
    register: (req, res) => {
        res.render("home/register");
    }
};

const process ={
    login : (req, res) => {
        const id = req.body.id;
        const pwd = req.body.pwd;

        const users = UserStorage.getUsers("id", "password");

        const response = {};

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);

            if(users.password[idx] === pwd){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    }
};

module.exports = {
    output,
    process
};