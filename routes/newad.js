/*
 * All routes for Messages are defined here
 * Since this file is loaded in server.js into api/messages,
 *   these routes are mounted onto /messages
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const messageHelper = require('../lib/messageHelper')

module.exports = (db) => {



  router.get("/newad", (req, res) => {
    messageHelper.testHelper(db).then((messages) => {
      console.log("Return from helper", messages);
      return res.json({ messages })
    }).catch((err) => {
      res
        .status(500)
        .json({ error: err.message });
    });

  });
  return router;
};
