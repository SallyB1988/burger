// Functions that interact with the database WRT burger
let orm = require("../config/orm.js");

let burger = {
  all: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });   // after doing the SQL 'all' query, call cb with the results
  },
  update: (columnVals, condition, cb) => {
    orm.update("burgers", columnVals, condition, (res) => {
      cb(res);
    })
  },
  create: (colNames, colVals, cb) => {
    orm.create("burgers", colNames, colVals, (res) => {
      cb(res);
    })
  }
};

// exports a burger object with all orm functions associated with it
// Used by the burgerController.js file
module.exports = burger;  
