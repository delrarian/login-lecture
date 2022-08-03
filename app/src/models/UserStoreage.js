"user strict";

const db = require("../config/db");


class UserStorage{   

    static getUserInfo(id){

        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) =>{
            if(err) reject(`${err}`);
            resolve(data[0]);
    });         
});   
}

    static async save(userInfo){     

        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";

            db.query(
                query, [userInfo.id, userInfo.names, userInfo.password]
                ,(err) =>{
                    if(err) reject(`${err}`);
                    resolve({ success: true });
                });         
            });      
    }
}

module.exports = UserStorage;