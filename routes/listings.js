/*
 * All routes for Listings are defined here
 * Since this file is loaded in server.js into api/listings,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM listings;`)
      .then((data) => {
        const templateVars = {
          "listings": data.rows,
          "price": "100",
          "description": data.rows[3],
        };
        const listings = data.rows;
        //res.json( listings );
        res.render("listings", templateVars)
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });



  return router
}
