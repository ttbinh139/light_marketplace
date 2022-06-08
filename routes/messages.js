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
    let userId = req.session.userId;
    console.log("Line 16: ",userId);
    messageHelper.getLastestMessageByUserId(userId, db)
      .then(data => {
        console.log(data);
        console.log(data.id);
        res.redirect(`/messages/${Number(data.id)}`);
        //res.json(data);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:message_id", (req, res) => {
    // Get logged in user
    let userId = req.session.userId;
    //console.log(userId);
    let message_id = req.params.message_id;
    // Get all messsages from user
    messageHelper.getAllMessagesByUserId(userId, db)
      .then(async function(data) {
        console.log("Line 39:",data);
        let messageDetail = await messageHelper.getMessageById(message_id, db);
        let conversation = await messageHelper.getConversationByMessageId(message_id, db);
        //console.log("line 38:", messageDetail);
        //console.log("line 39: ",conversation);
        return res.render('messages', { userId: userId, messages: data, messageDetail: messageDetail, conversation:conversation });
      }).catch((err) => {
        res
          .status(500)
          .json({ error: err.message });
      });
  })

  router.get("/new/:listingId", (req, res) => {
    let listingId = req.params.listingId;
    //console.log("Listing ID: ",listingId);
    let userId = req.session.userId;
    console.log(userId);
    // Get all messsages from user
    messageHelper.getAllMessagesByUserId(userId, db)
      .then(async function(data) {
        let listing = await messageHelper.getListingFromId(listingId, db);
        console.log(listing);
        return res.render("newmessage", {userId: userId, messages: data, listing:listing});
        //return res.render('messages', { userId: userId, messages: data, conversation: messageDetail });
      }).catch((err) => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  router.post("/new/:listingId", (req, res) => {
    let user_id = req.session.userId;
    let listing_id = req.params.listingId;
    let message = {
      sender_id: user_id,
      listing_id: listing_id,
      created_time: new Date()
    };
    //console.log(req.body);
    let text = req.body.txtMessage;

    //console.log(message);
    //console.log(text);
    messageHelper.saveMessage(message, listing_id, text, db)
      .then(data => {
        res.status(201).send(data);
        //res.json(data);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      })
  });

  router.post("/:message_id", (req, res) => {
    let user_id = req.session.userId;
    let message_id = req.params.message_id;
    let conversation = {
      message_id: message_id,
      message: req.body.txtMessage,
      owner_id: user_id,
      created_time: new Date()
    };

    messageHelper.insertNewConversation(conversation, db)
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      })
  });

  router.get("/conversation/:message_id", (req, res) => {
    let message_id = req.params.message_id;
    messageHelper.getConversationByMessageId(message_id, db)
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res
          .status(500)
          .json({ error: err.message });
    });
  });
  return router;
};
