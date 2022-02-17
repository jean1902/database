let mysql = require('mysql')


let db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'yoopo',
    

});
module.exports = db;
