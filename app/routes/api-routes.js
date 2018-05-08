// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // Get all Burgers
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(results => res.json(results));
  });

  // Add a Burger
  app.post("/api/new", function (req, res) {
    console.log("Burger Data:");
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(result) {
      res.json(result);
    });
  });

  // Delete a Burger
  app.put("/api/:number", function (req, res) {
    var body = req.body
    console.log("Burger Data:");
    console.log(req.body);
    db.Burger.update(body, {
      where: {
        id: req.body.id
      }
    }).then(function(result) {
      res.json(result)
    });
  });
};