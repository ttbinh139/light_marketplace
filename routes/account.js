const express = require("express");
const { renderSync } = require("sass");
const router = express.Router();
const sellerHelper = require("../lib/sellerHelper");
const messageHelper = require("../lib/messageHelper");

module.exports = (db) => {
  router.get("/", async (req, res) => {
    const listings = await sellerHelper.getListingsInfo(req.session.userId, db);
    let allPictures = [];
    for (listing of listings) {
      const val = await sellerHelper.getPictures(listing["id"], db);
      allPictures.push(val);
    }
    let value = [listings, allPictures];

    let all_message = await messageHelper.getAllMessagesByUserId(
      req.session.userId["id"],
      db
    );

    for (let x = 0; x < all_message.length; x++) {
      let listing_info = await sellerHelper.getListings(
        all_message[x].listing_id,
        db
      );
      all_message[x].listing_id = listing_info[0]["title"];
      let time_ago = all_message[x].created_time.toDateString();
      all_message[x].created_time = time_ago;
    }

    const favourites = await sellerHelper.getFavourites(
      req.session.userId["id"],
      db
    );

    for (let x = 0; x < favourites.length; x++) {
      let favPictures = await sellerHelper.getPictures(
        favourites[x]["listing_id"],
        db
      );
      let favTitles = await sellerHelper.getListings(
        favourites[x]["listing_id"],
        db
      );
      favourites[x]["photo_1"] = favPictures["photo_1"];
      favourites[x]["price"] = favTitles[0]["price"];
      favourites[x]["active"] = favTitles[0]["active"];
      favourites[x]["title"] = favTitles[0]["title"];
    }

    const templateVars = {
      userId: req.session.userId,
      allListings: value[0],
      allPictures: value[1],
      allMessage: all_message,
      allFavourites: favourites,
    };

    res.render("account", templateVars);
  });

  router.post("/:listingid/sold", (req, res) => {
    let listingId = req.params.listingid;
    sellerHelper.markAsSold(listingId, db);
    return res.redirect("/account");
  });

  router.post("/:listingid/delete", (req, res) => {
    let listingId = req.params.listingid;
    sellerHelper.deleteListing(listingId, db);
    return res.redirect("/account");
  });

  router.post("/:listingid/removeFav", async (req, res) => {
    let listingId = req.params.listingid;
    let userId = req.session.userId["id"];
    await sellerHelper.removeFav(userId, listingId, db);
    //await sellerHelper.testHelper(db);
    return res.redirect("/account");
  });

  return router;
};
