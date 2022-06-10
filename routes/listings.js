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

  router.post("/delete/:id", (req, res) => {
    const listingID = Number(Object.values(req.params));
    const userID = req.session.userId.id;
    const queryString = `DELETE FROM favourites
    WHERE user_id = $1
    AND listing_id = $2;`;
    db.query(queryString, [userID, listingID])
      .then((data) => {
        res.redirect("/account");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
