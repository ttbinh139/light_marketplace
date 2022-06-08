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
      INSERT INTO listings (title, description, price, condition, user_id, created) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ;
      `,
    [
      listing["title"],
      listing["description"],
      listing["price"],
      listing["condition"],
      userid["id"],
      new Date(),
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
  return db.query(
    `
      INSERT INTO users_listings (listing_id)
      VALUES ($1) RETURNING *;
      `,
    [listingid]
  );
}

async function addNewPhotos(listingid, path, db) {
  let query = `
INSERT INTO photos (photo_1, listing_id)
VALUES ($1, $2) RETURNING *;
`;
  let photos = [path, listingid];
  return db.query(query, photos);
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

const getUserWithEmail = (email, db) => {
  return db
    .query(`SELECT * FROM users WHERE email = $1`, [email])
    .then((result) => {
      if (result.rows[0] === undefined) {
        console.log(result.rows[0]);
        return null;
      }
      return result.rows[0];
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

const getUserInfo = (userid, db) => {
  let query = `
    SELECT * FROM listings
    WHERE user_id = $1;
  `;
  return db
    .query(query, [userid["id"]])
    .then((result) => {
      if (result.rows[0] === undefined) {
        return null;
      }
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const getPictures = (listingid, db) => {
  let query = `
    SELECT * FROM photos
    WHERE listing_id = $1;
  `;
  return db
    .query(query, [listingid])
    .then((result) => {
      if (result.rows[0] === undefined) {
        return null;
      }
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

module.exports = {
  getUserInfo,
  testHelper,
  login,
  getIdWithEmail,
  addNewListing,
  addNewUsers_listing,
  addNewPhotos,
  getAddedListingId,
  getPictures,
};
