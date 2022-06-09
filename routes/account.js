const express = require("express");
const { renderSync } = require("sass");
const router = express.Router();
const sellerHelper = require("../lib/sellerHelper");

module.exports = (db) => {
  router.get("/", async (req, res) => {
    const listings = await sellerHelper.getListingsInfo(req.session.userId, db);
    let allPictures = [];
    for (listing of listings) {
      const val = await sellerHelper.getPictures(listing["id"], db);
      allPictures.push(val);
    }
    let value = [listings, allPictures];
    const templateVars = {
      userId: req.session.userId,
      allListings: value[0],
      allPictures: value[1],
    };
    return res.render("account", templateVars);
  });
  return router;
};
