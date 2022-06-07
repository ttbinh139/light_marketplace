/*
 * All routes for Messages are defined here
 * Since this file is loaded in server.js into api/messages,
 *   these routes are mounted onto /messages
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const messageHelper = require('../lib/messageHelper')

module.exports = (db) => {
  router.get("/", (req, res) => {
    // Get logged in user
    let userId = 1;
    // Get all messsages from user
    messageHelper.getAllMessagesByUserId(userId, db)
      .then(async function(data) {
        let firstRow = data[0];
        //console.log(firstRow);
        let listingDetail = await messageHelper.getListingFromId(firstRow.listing_id, db);
        let conversation = await messageHelper.getConversationByMessageId(firstRow.id, db);
        //console.log('message id: ', firstRow.id);
        //console.log("listing detail: ", listingDetail);
        //console.log("conversation:", conversation);
        return res.render('messages', { userId: userId, messages: data, listing:listingDetail, conversation: conversation });
      }).catch((err) => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/new/:listingId", (req, res) => {
    let listingId = req.params.listingId;
    console.log("Listing ID: ",listingId);
    return res.render("newmessage", {listingId:listingId});
  });

  router.post("/new", (reg, res) => {

  });
  return router;
};
