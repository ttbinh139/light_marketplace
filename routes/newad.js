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
    sellerHelper
      .addNewListing(req.session.user_id, listing, db)
      .then(async function (data) {
        let listing_id = await sellerHelper.getAddedListingId(db);
        sellerHelper.addNewUsers_listing(listing_id, db);
      })
      .then(async function (data) {
        sellerHelper.testHelper(db);
      })
      .then((result) => {
        return res.redirect("/");
      })
      .catch((e) => {
        res.send(e);
        return res.redirect("/");
      });
  });

  router.get("/", (req, res) => {
    const templateVars = {
      user_id: req.session.user_id,
    };
    return res.render("newad", templateVars);
  });

  return router;
};
