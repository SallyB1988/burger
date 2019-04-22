const mysql = require('mysql');
var connection;
// connection to mysql database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
  } else {
      connection = mysql.createConnection({
      host: 'localhost',
      port: 3306, // SALLY -- Is this correct?
      user: 'root',
      password: 'root',     // Do I have to show everyone my password?
      database: 'burgers_db'
    });
  }

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected at id: " + connection.threadId);
});

module.exports = connection;