// DB CONNECTION SETUP
const mysql2 = require('mysql2')

const dbconfig = mysql2.createPool({
    host : "localhost",
    user : "root",
    password : "root",
    database : "testdb"
});

module.exports= dbconfig.promise();
