/*
 * All routes for Messages are defined here
 * Since this file is loaded in server.js into api/messages,
 *   these routes are mounted onto /messages
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM messages`;
    console.log(query);
    db.query(query)
      .then(data => {
        const messages = data.rows;
        res.json({ messages });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
