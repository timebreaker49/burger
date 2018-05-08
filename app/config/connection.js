// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("sequelize_burger", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "root",
      database: "sequelize_burger"
});
};

// Make connection.
connection.connect(function(err) {
if (err) {
  console.error("error connecting: " + err.stack);
  return;
}
console.log("connected as id " + connection.threadId);
});

// Exports the connection for other files to use
module.exports = sequelize;
