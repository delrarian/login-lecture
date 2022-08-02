const mysql = require('mysql');

const db = mysql.createConnection({
    host: "127.0.0.1",
    port: 3307,
    user: "tivo",
    password: "Tivoekd55",
    database: "loginlecture"
});

// db.connect((err) => {
//     if(err) throw err;
//     console.error(err);
//     console.log("에러있음");
// });


db.connect(function(err){
    if(err) {
        console.log(err)
    } else {
        console.log("connected");
    }
});

module.exports = db;