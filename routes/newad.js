/*
 * All routes for Messages are defined here
 * Since this file is loaded in server.js into api/messages,
 *   these routes are mounted onto /messages
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const { renderSync } = require("sass");
const router = express.Router();
const messageHelper = require("../lib/messageHelper");

module.exports = (db) => {
  router.get("/", (req, res) => {
    messageHelper
      .testHelper(db)
      .then((messages) => {
        console.log("Return from helper", messages);
        return res.render("newad", { messages });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/new", (req, res) => {
    const { title, description, price, imageUrl } = req.body;
    messageHelper
      .testHelper(db)

      .then((result) => {
        console.log("Return from helper", result);
        return res.redirect("/newad");
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
        return res.redirect("/newad");
      });
  });

  router.get("/newad", (reg, res) => {
    return res.render("newad");
  });

  return router;
};
