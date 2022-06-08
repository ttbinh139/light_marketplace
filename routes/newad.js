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
  router.post("/new", (req, res) => {
    if (!req.files) {
      return res.status(400).send("No files were uploaded!");
    }
    const path = "/vagrant/light_marketplace/public/pictures";

    const file = req.files.filename;
    for (let i = 0; i < file.length; i++) {
      file[i].mv(path + file[i].name, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    /*const file1 = req.files.photo1;
    const file2 = req.files.photo2;
    const file3 = req.files.photo3;
    const file4 = req.files.photo4;*/

    const listing = req.body;

    Promise.all([
      sellerHelper.addNewListing(req.session.userId, listing, db),
      sellerHelper.getAddedListingId(db),
    ])
      .then((values) => {
        let listing_id = values[1];
        sellerHelper.addNewUsers_listing(listing_id, db);
        sellerHelper.addNewPhotos(listing_id, path, db);
      })
      .then((result) => {
        return res.redirect("/");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  /*router.post("/upload", (req, res) => {
    if (!req.files) {
      return res.status(400).send("No files were uploaded!");
    }

    const file1 = req.files.photo1;
    const file2 = req.files.photo2;
    const file3 = req.files.photo3;
    const file4 = req.files.photo4;

    const path = "/vagrant/light_marketplace/public/pictures" + file1.name;
    const allowedExtension = [".png", ".jpg", ".jpeg"];

    file1.mv(path, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send({ status: "success", path: path });
      return;
    });
  });*/

  router.get("/", (req, res) => {
    const templateVars = {
      userId: req.session.userId,
    };
    return res.render("newad", templateVars);
  });

  return router;
};
