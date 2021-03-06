/*
 * All routes for Messages are defined here
 * Since this file is loaded in server.js into api/messages,
 *   these routes are mounted onto /messages
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
   * POST request to make a new listing
   **/

  router.post("/new", async (req, res) => {
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
      await file[keys].mv(path + file[keys].name, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
      });
      // Array of each file location
      files.push(path1 + file[keys].name);
    }

    /*const file1 = req.files.photo1;
    const file2 = req.files.photo2;
    const file3 = req.files.photo3;
    const file4 = req.files.photo4;*/

    // GET the information of the listing taht was posted
    const listing = req.body;
    let niche = sellerHelper.addNiche(listing.niche, db);

    // add listing in to listing db
    await sellerHelper.addNewListing(req.session.userId, listing, niche, db);
    let listing_id = await sellerHelper.getAddedListingId(db);
    await sellerHelper
      // add the pictures into photos db
      .addNewPhotos(listing_id, files, db)
      .then((result) => {
        sellerHelper.testHelper(db);
      })
      .then((result) => {
        return res.redirect("/");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  /**
   * Get request to see the add a new listing page
   **/
  router.get("/", (req, res) => {
    const templateVars = {
      userId: req.session.userId,
    };
    return res.render("newad", templateVars);
  });

  return router;
};
