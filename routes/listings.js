/*
 * All routes for Listings are defined here
 * Since this file is loaded in server.js into api/listings,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const listingHelper = require('../lib/sellerHelper');

module.exports = (db) => {
  router.get("/", (req, res) => {
    const queryParams = []
    let queryString = `SELECT * FROM listings JOIN photos ON listings.id = listing_id `

<<<<<<< HEAD
  router.get("/listings", (req, res) => {
    let query = `SELECT * FROM listings`;
    console.log(query);
    db.query(query)
      .then(data => {
=======

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
      console.log('params', typeof queryParams)
      console.log('params', queryParams)
      queryString += `AND price <= $${queryParams.length} `;
    }


    db.query(queryString, queryParams)
      .then((data) => {
        const templateVars = {
          "listings": data.rows,
        };
>>>>>>> master
        const listings = data.rows;
        //res.json({ listings });
        res.render("listings", templateVars)
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:id", (req,res) => {
    let id = Object.values(req.params)
    const queryParams = []
    let queryString = `SELECT *
    FROM listings JOIN photos ON listings.id = listing_id
    WHERE listings.id = ${id};`



    db.query(queryString, queryParams)
      .then((data) => {
        const templateVars = {
          "listings": data.rows,
        };
        const listings = data.rows;
        //res.json({ listings})
        res.render("listingid", templateVars)
      })
  })

  router.post("/:id", (req, res) => {

  })
  return router
}



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
// }
