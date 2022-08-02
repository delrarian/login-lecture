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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.password.push(userInfo.password);
        users.names.push(userInfo.names);
        console.log(users);
        return {success: true};
    }
}

module.exports = UserStorage;