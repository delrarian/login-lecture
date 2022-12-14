"use strict";

const logger = require("../config/logger");
const UserStorage = require("./UserStoreage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const body = this.body;
        const user = await UserStorage.getUserInfo(body.id);
        try{
            if(user){
                if (user.id === body.id && user.password === body.password){
                    return {success: true};
                }
                return {success: false, msg: "비밀번호가 틀렸습니다."};
            }
            return {success: false, msg: "존재하지 않는 아이디입니다."};   

        } catch(err){
            return { success: false, err };            
        }        
    }

    async register(){
        try{
            const response = await UserStorage.save(this.body);
            return response;
        } catch (err){
            return { success: false, err};
        }        
    }
}

module.exports = User;