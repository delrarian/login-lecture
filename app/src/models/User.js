"use strict";

const UserStorage = require("./UserStoreage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const body = this.body;
        const { id, password } = await UserStorage.getUserInfo(body.id)

        if(id){
            if (id === body.id && password === body.password){
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    }

    async register(){
        try{
            const response = await UserStorage.save(this.body);
            return response;
        } catch (err){
            console.error(err);
            return { success: false, msg: err};
        }        
    }
}

module.exports = User;