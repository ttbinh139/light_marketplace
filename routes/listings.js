/*
 * All routes for Listings are defined here
 * Since this file is loaded in server.js into api/listings,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const listingHelper = require("../lib/sellerHelper");

module.exports = (db) => {
  router.get("/", (req, res) => {
    const queryParams = [];
    let queryString = `SELECT * FROM listings JOIN photos ON listings.id = listing_id `;

    if (req.query.buying) {
      queryParams.push(`%${req.query.buying}%`);
      queryString += `WHERE title LIKE $${queryParams.length} `;
    }

    if (req.query.min) {
      queryParams.push(req.query.min);
      queryString += `AND price >= $${queryParams.length} `;
    }

    if (req.query.max) {
      queryParams.push(req.query.max);
      console.log("params", typeof queryParams);
      console.log("params", queryParams);
      queryString += `AND price <= $${queryParams.length} `;
    }

    db.query(queryString, queryParams)
=======
const buyerHelper = require("../lib/buyerHelper");

module.exports = (db) => {
  router.get("/", (req, res) => {
    let request = req;
    buyerHelper
      .getListings(request, db)
>>>>>>> f2f5597161318aae2f11bb2cd1c902b12d7570d9
      .then((data) => {
        const templateVars = {
          listings: data.rows,
        };
<<<<<<< HEAD
        const listings = data.rows;
        //res.json({ listings });
=======
>>>>>>> f2f5597161318aae2f11bb2cd1c902b12d7570d9
        res.render("listings", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
<<<<<<< HEAD
    let id = Object.values(req.params);
    const queryParams = [];
    let queryString = `SELECT *
    FROM listings JOIN photos ON listings.id = listing_id
    WHERE listings.id = ${id};`;

    db.query(queryString, queryParams).then((data) => {
=======
    let listingID = Object.values(req.params);
    buyerHelper.getListingID(listingID, db).then((data) => {
>>>>>>> f2f5597161318aae2f11bb2cd1c902b12d7570d9
      const templateVars = {
        listings: data.rows,
      };
      const listings = data.rows;
      //res.json({ listings})
      res.render("listingid", templateVars);
    });
  });

<<<<<<< HEAD
  router.post("/:id", (req, res) => {});
  return router;
};

// router.get("/:id", (req,res) => {

//   db.query(`SELECT *
//   FROM listings JOIN photos ON listings.id = listing_id
//   WHERE id = ${req.params.id}`)
//     .then((data) => {
//       const templateVars = {
//         "listings": data.rows,
//       };
//       const listings = data.rows;
//       //res.json({ listings})
//       res.render("listingid", templateVars)
//     })
// })

// return router
// })
=======
  router.post("/:id", (req, res) => {
    const listingID = Number(Object.values(req.params));
    const userID = req.session.userId.id;

    buyerHelper
      .checkFavourites(userID, listingID, db)
      .then((data) => {
        if (data.rows.length > 0) {
          res.end("Listing Already Added To Favourites");
        } else {
          buyerHelper.insertFavourites(userID, listingID, db).then((data) => {
            const listings = data.rows;
            res.redirect("/account");
          });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/delete/:id", (req, res) => {
    const listingID = Number(Object.values(req.params));
    const userID = req.session.userId.id;
    const queryString = `DELETE FROM favourites
    WHERE user_id = $1
    AND listing_id = $2;`;
    db.query(queryString, [userID, listingID])
      .then((data) => {
        res.redirect("/account");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
>>>>>>> f2f5597161318aae2f11bb2cd1c902b12d7570d9
