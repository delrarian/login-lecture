"user strict";

class UserStorage{
    static #users = {
        id: ["tivo", "tivos", "shyfamily"],
        password: ["1234", "1234", "1234"],
        names: ["무령", "무령스", "무령인가"]
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            // console.log(newUsers, field);
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {}) ;       
        return newUsers;
    }
}

module.exports = UserStorage;