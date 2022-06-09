const getFavourites = (userid, db) => {
  let queryString = `SELECT * FROM favourites JOIN listings ON favourites.listing_id = listings.id
  WHERE favourites.user_id = $1;
`;
db.query(queryString, [userid])
.then(data => {
  console.log(data);
  return data.rows[0];
})
.catch(err => {
  return err;
})
};

module.exports = {
  getFavourites
}

console.log("hello")
