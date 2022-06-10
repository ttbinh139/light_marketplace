const express = require("express");
const { renderSync } = require("sass");
const router = express.Router();
const sellerHelper = require("../lib/sellerHelper");
const messageHelper = require("../lib/messageHelper");

module.exports = (db) => {
  /**
   * View logged in users account page
   **/
  router.get("/", async (req, res) => {
    // Get entire listings information from db
    const listings = await sellerHelper.getListingsInfo(req.session.userId, db);
    let allPictures = [];
    for (listing of listings) {
      // get corresponding pictures of each listings
      const val = await sellerHelper.getPictures(listing["id"], db);
      allPictures.push(val);
    }
    let value = [listings, allPictures];
    // Get all messages from db corresponding to user
    let all_message = await messageHelper.getAllMessagesByUserId(
      req.session.userId["id"],
      db
    );

    for (let x = 0; x < all_message.length; x++) {
      // Get listing info corresponding to messasge
      let listing_info = await sellerHelper.getListings(
        all_message[x].listing_id,
        db
      );
      // Get title of listing corresponding to messasge
      all_message[x].listing_id = listing_info[0]["title"];
      // Get timestamp of listing corresponding to messasge
      let time_ago = all_message[x].created_time.toDateString();
      all_message[x].created_time = time_ago;
    }

    // Get favourites of users
    const favourites = await sellerHelper.getFavourites(
      req.session.userId["id"],
      db
    );

    for (let x = 0; x < favourites.length; x++) {
      // Get favourited items corresponding picture
      let favPictures = await sellerHelper.getPictures(
        favourites[x]["listing_id"],
        db
      );

      let favTitles = await sellerHelper.getListings(
        favourites[x]["listing_id"],
        db
      );
      // Get favorites photo, price, active status and title to render to the account page
      favourites[x]["photo_1"] = favPictures["photo_1"];
      favourites[x]["price"] = favTitles[0]["price"];
      favourites[x]["active"] = favTitles[0]["active"];
      favourites[x]["title"] = favTitles[0]["title"];
    }

    // Render each data needed for the account page
    const templateVars = {
      userId: req.session.userId,
      allListings: value[0],
      allPictures: value[1],
      allMessage: all_message,
      allFavourites: favourites,
    };

    res.render("account", templateVars);
  });
  /**
   * POST Request,  Mark item as sold
   **/
  router.post("/:listingid/sold", (req, res) => {
    // Get listingId of listing wanting to remove from post
    let listingId = req.params.listingid;
    // Call function to mark item as sold from db
    sellerHelper.markAsSold(listingId, db);
    return res.redirect("/account");
  });
  /**
   * POST Request,  Delete item from listings and db
   **/
  router.post("/:listingid/delete", (req, res) => {
    // Get listingId of listing wanting to remove from post
    let listingId = req.params.listingid;
    // Call function to delete from listings db
    sellerHelper.deleteListing(listingId, db);
    return res.redirect("/account");
  });
  /**
   * POST Request,  Delete item from favorites
   **/
  router.post("/:listingid/removeFav", async (req, res) => {
    // Get both listingId and userId of listing wanting to remove from post
    let listingId = req.params.listingid;
    let userId = req.session.userId["id"];
    // Call function to delete from favourites
    await sellerHelper.removeFav(userId, listingId, db);
    await sellerHelper.testHelper(db);
    //await sellerHelper.testHelper(db);
    return res.redirect("/account");
  });

  return router;
};
