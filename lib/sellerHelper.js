const dbParams = require("./db");

const testHelper = function (db) {
  let query = `
  select * FROM listings;
  `;
  return db
    .query(query)
    .then((result) => {
      console.log(result.rows);
    })
    .catch((err) => {
      return err;
    });
};

const getIdWithEmail = (email, db) => {
  return db
    .query(`SELECT id FROM users WHERE email = $1`, [email])
    .then((result) => {
      if (result.rows[0] === undefined) {
        return null;
      }
      return result.rows[0];
    })
    .catch((err) => {
      return err;
    });
};

function addNewListing(userid, listing, db) {
  if (listing["condition"] === "New") {
    listing["condition"] = true;
  } else {
    listing["condition"] = false;
  }
  return db.query(
    `
      INSERT INTO listings (title, description, price, condition, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING * ;
      `,
    [
      listing["title"],
      listing["description"],
      listing["price"],
      listing["condition"],
      userid["id"],
    ]
  );
}

async function getAddedListingId(db) {
  return db
    .query(
      `SELECT * FROM listings
    ORDER BY id DESC
    LIMIT 1;
    `
    )
    .then((result) => {
      return result.rows[0]["id"];
    })
    .catch((err) => {
      return err;
    });
}

async function addNewUsers_listing(listingid, db) {
  console.log(listingid);
  return db.query(
    `
      INSERT INTO users_listings (listing_id)
      VALUES ($1) RETURNING *;
      `,
    [listingid]
  );
}

async function addNewPhotos(listingid, listing, db) {
  return db.query(
    `
      INSERT INTO photos (photo_1, listing_id)
      VALUES ($1, $2) RETURNING *;
      `,
    [listing["photo-1"], listingid]
  );
}

const getListings = (db) => {
  return db
    .query(`SELECT * FROM listings`, [])
    .then((result) => {
      return console.log(result.rows);
    })
    .catch((err) => {
      return err;
    });
};

const login = function (email, db) {
  return getUserWithEmail(email, db)
    .then((user) => {
      if (user) {
        return user;
      } else {
        return null;
      }
    })
    .catch((err) => {
      return err;
    });
};

module.exports = {
  testHelper,
  login,
  getIdWithEmail,
  addNewListing,
  addNewUsers_listing,
  addNewPhotos,
  getAddedListingId,
};
