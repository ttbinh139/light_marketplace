/*
 * All routes for Listings are defined here
 * Since this file is loaded in server.js into api/listings,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const buyerHelper = require("../lib/buyerHelper");

module.exports = (db) => {
  //Main request for the listings page
  router.get("/", (req, res) => {
    let request = req;
    buyerHelper
      .getListings(request, db)
      .then((data) => {
        const templateVars = {
          listings: data.rows,
        };
        res.render("listings", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Main request for the individual listings pages
  router.get("/:id", (req, res) => {
    let listingID = Number(Object.values(req.params));
    buyerHelper.getListingID(listingID, db).then((data) => {
      const templateVars = {
        listings: data.rows,
      };
      const listings = data.rows;
      //res.json({ listings})
      res.render("listingid", templateVars);
    });
  });

  //Main post for adding to favourites while checking if user already added the favourite.
  router.post("/:id", (req, res) => {
    const listingID = Number(Object.values(req.params));
    const userID = req.session.userId.id;

    buyerHelper
      .checkFavourites(userID, listingID, db)
      .then((data) => {
        if (data.rows.length > 0) {
          res.end("Listing Already Added To Favourites");
        } else {
          buyerHelper.insertFavourites(userID, listingID, db).then((data) => {
            const listings = data.rows;
            res.redirect("/account");
          });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
