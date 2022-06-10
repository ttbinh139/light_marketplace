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
  /**
   * POST request to edit a listing
   **/
  router.post("/:listingid", async (req, res) => {
    let listingId = req.params.listingid.charAt(1);
    let files = [];
    // Upload and get the location of the images
    if (!req.files) {
      return res.status(400).send("No files were uploaded!");
    }
    const path = "/vagrant/light_marketplace/public/picture/";
    const path1 = "/picture/";
    const file = req.files;
    let key = Object.keys(file);

    for (let keys of key) {
      files.push(path1 + file[keys].name);
      file[keys].mv(path + file[keys].name, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    // Get updated listing info

    const listing = req.body;
    let niche = sellerHelper.addNiche(listing["niche"], db);
    // Edit the listing that was updated
    await sellerHelper.editListing(
      req.session.userId,
      listing,
      niche,
      listingId,
      db
    );
    // Edit the photo location that was updated
    await sellerHelper.editPhotos(listingId, files, db);
    sellerHelper
      .testHelper(db)
      .then((result) => {
        return res.redirect("/");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  /**
   * GET request to edit page
   **/
  router.get("/:listingid", async (req, res) => {
    // Get all corresponding data related to the listing
    let listingId = req.params.listingid.slice(1);
    const info = await sellerHelper.getListingsInfoEdit(listingId, db);
    const pictures = await sellerHelper.getPictures(listingId, db);
    const nicheType = sellerHelper.nicheIdToChar(info[0]["niche_id"]);
    info[0]["niche_id"] = nicheType;
    if (info[0]["condition"] === true) info[0]["condition"] = "New";
    if (info[0]["condition"] === false) info[0]["condition"] = "Used";

    // Render all the data needed of the listing to edit the listing
    const templateVars = {
      userId: req.session.userId,
      title: info[0]["title"],
      price: info[0]["price"],
      condition: info[0]["condition"],
      type: info[0]["niche_id"],
      description: info[0]["description"],
      id: info[0]["id"],
      pictures: pictures,
    };

    return res.render("edit", templateVars);
  });

  return router;
};
