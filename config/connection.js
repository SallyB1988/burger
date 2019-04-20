const mysql = require('mysql');

// connection to mysql database
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'burgers_db'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected at id: " + connection.threadId);
});

module.exports = connection;