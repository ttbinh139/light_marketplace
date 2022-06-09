/*
 * All routes for edits are defined here
 * Since this file is loaded in server.js into api/edit,
 *   these routes are mounted onto /edit
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const { renderSync } = require("sass");
const router = express.Router();
const fileUpload = require("express-fileupload");
const path = require("path");
const sellerHelper = require("../lib/sellerHelper");

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log(req.query);
  });

  router.get("/:listingid", async (req, res) => {
    let listingId = req.params.listingid.charAt(1);
    const info = await sellerHelper.getListingsInfoEdit(listingId, db);
    const pictures = await sellerHelper.getPictures(listingId, db);
    const nicheType = sellerHelper.nicheIdToChar(info[0]["niche_id"]);
    info[0]["niche_id"] = nicheType;
    if (info[0]["condition"] === true) info[0]["condition"] = "New";
    if (info[0]["condition"] === false) info[0]["condition"] = "Used";

    const templateVars = {
      userId: req.session.userId,
      title: info[0]["title"],
      price: info[0]["price"],
      condition: info[0]["condition"],
      type: info[0]["niche_id"],
      description: info[0]["description"],
      pictures: pictures,
    };

    return res.render("edit", templateVars);
  });

  return router;
};
