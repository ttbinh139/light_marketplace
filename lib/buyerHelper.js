async function checkFavourites (userId, listingId, db) {
  let query = `SELECT *
              FROM favourites
              WHERE listing_id = $1 and user_id = $2`;
  let data = await db.query(query, [listingId, userId]);
  return data;
}

module.exports = {
  checkFavourites
}

console.log("hello")
