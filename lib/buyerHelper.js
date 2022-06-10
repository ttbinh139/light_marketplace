async function checkFavourites(userId, listingId, db) {
  let queryString = `SELECT *
              FROM favourites
              WHERE listing_id = $1 and user_id = $2`;
  let data = await db.query(queryString, [listingId, userId]);
  return data;
}

async function insertFavourites(userID, listingID, db) {
  const queryString = `INSERT INTO favourites
        (user_id, listing_id)
        values ($1, $2) RETURNING *;`;
  let data = await db.query(queryString, [userID, listingID]);
  return data;
}

async function getListings(req, db) {
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
    queryString += `AND price <= $${queryParams.length} `;
  }

  if (req.query.category) {
    queryParams.push(req.query.category);
    queryString += `AND niche_id = $${queryParams.length} `;
  }

  if (req.query.condition) {
    queryParams.push(req.query.condition);
    queryString += `AND condition = $${queryParams.length} `;
  }
  let data = await db.query(queryString, queryParams);
  return data;
}

async function getListingID(listingID, db) {
  const queryParams = [];
  let queryString = `SELECT *
    FROM listings JOIN photos ON listings.id = listing_id
    WHERE listings.id = ${listingID};`;
  let data = await db.query(queryString, queryParams);
  return data;
}

module.exports = {
  checkFavourites,
  insertFavourites,
  getListings,
  getListingID,
};
