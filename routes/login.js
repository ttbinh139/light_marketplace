const express = require("express");
const { renderSync } = require("sass");
const router = express.Router();
const { login } = require("../lib/sellerHelper");

module.exports = (db) => {
  router.post("/login", (req, res) => {
    const { email } = req.body;
    login(email, db)
      .then((user) => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.session.userId = user.id;
        res.send({ user: { name: user.name, email: user.email, id: user.id } });
        res.redirect("");
      })
      .catch((e) => res.send(e));
  });

  return router;
};
