const express = require("express");
const { renderSync } = require("sass");
const router = express.Router();
const sellerHelper = require("../lib/sellerHelper");

module.exports = (db) => {
  router.get("/", (req, res) => {
    let listings = sellerHelper.getUserInfo(req.session.userId, db);
    let pictures = sellerHelper.getPictures(listings["id"], db);
    const templateVars = {
      userId: req.session.userId,
      listings: listings,
      pictures: pictures,
    };
    return res.render("account", templateVars);
  });
  return router;
};
