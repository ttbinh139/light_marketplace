const express = require("express");
const { renderSync } = require("sass");
const router = express.Router();
const { login } = require("../lib/sellerHelper");


/**
* POST request to login
**/
module.exports = (db) => {
  router.post("/", (req, res) => {
    const { email } = req.body;
    login(email, db)
      .then((user) => {
        if (!user) {
          return res.status(400).send("Email address does not exist."); // error if email dosent exist
        }
        req.session.userId = user;
        return res.redirect("/");
      })
      .catch((e) => res.send(e));
  });

  return router;
};
