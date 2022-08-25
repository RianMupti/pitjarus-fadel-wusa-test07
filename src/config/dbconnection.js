const mysql = require('mysql')

const mysqldb = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_development',
    host: '127.0.0.1'
});

exports.db = mysqldb;