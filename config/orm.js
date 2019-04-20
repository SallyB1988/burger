const connection = require('./connection.js');

// Helper function to print question marks for each item in an array
const printQuestionMarks = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?")
  };
  return arr.toString();
}

// Helper function that returns SQL syntax for an object with key/value pairs
// (ie, change {'id: 3'} to be ['id = 3'])
const objToSql = (obj) => {
 let arr = [];
 for (let key in obj) {
   let value = obj[key];
   // I don't fully understand this one. It seems to be checking if the object has a key of the current value
   // The original code says this is to skip hidden properties...
   if (Object.hasOwnProperty.call(obj, key)) {
     if (typeof value === "string" && value.indexOf(" ") >=0) {
       value = `'${value}'`;    // enclose strings with spaces inside quotation marks
     }
     arr.push(`${key} = ${value}`);
   }
 }
 return arr.toString();
};

// Object for all SQL statement functions.
let orm = {
  all: (tableInput, cb) => {
    let queryStr = `SELECT * FROM ${tableInput};`;    // SALLY - do I need the ; inside the backtick?
    connection.query(queryStr, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  
  update: (table, columnData, condition, cb) => {
    let queryStr = `UPDATE ${table} SET ${objToSql(columnData)} WHERE ${condition}`;
    connection.query(queryStr, (err, result) => {
      if (err) throw err;
      cb(result)
    });
  },

  create: (table, colNames, colVals, cb) => {
    let queryStr = `INSERT INTO ${table} (${colNames.toString()})
    VALUES (${printQuestionMarks(colVals.length)}) `;
    connection.query(queryStr, colVals, (err,result) => {
      if (err) throw err;
      cb(result);
    })
  }
  // add other REST calls here -- create, update, delete
};

module.exports = orm;