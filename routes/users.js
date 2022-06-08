/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const { renderSync } = require("sass");
const router = express.Router();
const sellerHelper = require("../lib/sellerHelper");

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

<<<<<<< HEAD
=======
  router.get("/login/:userId", (req, res) => {
    console.log(req.params.userId);
    req.session.userId = req.params.userId;
    res.redirect("/");
  });

  router.get("/logout", (req, res) => {
    req.session.userId = null;
    res.redirect("/");
  })
>>>>>>> master
  return router;
};
