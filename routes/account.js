const express = require("express");
const { renderSync } = require("sass");
const router = express.Router();
const sellerHelper = require("../lib/sellerHelper");
const buyerHelper = require("../lib/buyerHelper");
const { database } = require("pg/lib/defaults");

module.exports = (db) => {
  router.get("/", (req, res) => {
    const id = req.session.userId.id
    console.log('id,',typeof id)
    let queryString = `SELECT * FROM favourites JOIN listings ON favourites.listing_id = listings.id
    WHERE favourites.user_id = ${id}
    ORDER BY favourites.id ASC;
  `;
  db.query(queryString)
  .then((data) => {
    const templateVars = {
      userId: req.session.userId,
      "info": data.rows,
    };

    res.render("account", templateVars)
  })
  });
  return router;
};
