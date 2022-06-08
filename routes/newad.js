/*
 * All routes for Messages are defined here
 * Since this file is loaded in server.js into api/messages,
 *   these routes are mounted onto /messages
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const { renderSync } = require("sass");
const router = express.Router();
const sellerHelper = require("../lib/sellerHelper");

module.exports = (db) => {
  router.post("/new", (req, res) => {
    const listing = req.body;

    Promise.all([
      sellerHelper.addNewListing(req.session.userId, listing, db),
      sellerHelper.getAddedListingId(db),
    ])
      .then((values) => {
        let listing_id = values[1];
        sellerHelper.addNewUsers_listing(listing_id, db);
        sellerHelper.addNewPhotos(listing_id, listing, db);
      })
      .then((result) => {
        return res.redirect("/");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/", (req, res) => {
    const templateVars = {
      userId: req.session.userId,
    };
    return res.render("newad", templateVars);
  });

  return router;
};
