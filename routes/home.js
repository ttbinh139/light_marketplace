/*
 * All routes for Index are defined here
 * Since this file is loaded in server.js into api/listings,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const buyerHelper = require("../lib/buyerHelper");

module.exports = (db) => {
  router.get("/", (req, res) => {
    let request = req;
    buyerHelper
    .getListings(request, db)
      .then((data) => {
        const templateVars = {
          "listings": data.rows,
        };
        res.render("home", templateVars)
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });



  return router
}
