const mysql = require('mysql');

// connection to mysql database
var connection = mysql.createConnection({
  host: 'localhost',
  port: process.env.PORT || 3306, // SALLY -- Is this correct?
  user: 'root',
  password: 'root',     // Do I have to show everyone my password?
  database: 'burgers_db'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected at id: " + connection.threadId);
});

module.exports = connection;