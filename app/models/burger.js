var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");
module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    burger_name: {
      type: DataTypes.STRING,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });

  return Burger;
};