/*
 * All routes for Listings are defined here
 * Since this file is loaded in server.js into api/listings,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const { route } = require('express/lib/application');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT *
              FROM listings JOIN photos ON listings.id = listing_id;`)
      .then((data) => {
        const templateVars = {
          "listings": data.rows,
        };
        const listings = data.rows;
        //res.json({ listings });
        res.render("listings", templateVars)
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:id", (req,res) => {
    db.query(`SELECT *
      FROM listings JOIN photos ON listings.id = listing_id
      WHERE listings.id = 1;`)
      .then((data) => {
        const templateVars = {
          "listings": data.rows,
        };
        const listings = data.rows;
        //res.json({ listings})
        res.render("listingid", templateVars)
      })
  })

  return router
}
