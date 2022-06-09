const dbParams = require("./db");

const testHelper = function (db) {
  let query = `
  select * FROM listings
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

function addNewListing(userid, listing, niche, db) {
  if (listing["condition"] === "New") {
    listing["condition"] = true;
  } else {
    listing["condition"] = false;
  }
  return db.query(
    `
      INSERT INTO listings (title, description, price, condition, user_id, created, niche_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ;
      `,
    [
      listing["title"],
      listing["description"],
      listing["price"],
      listing["condition"],
      userid["id"],
      new Date(),
      niche,
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

function addNiche(niche, db) {
  if (niche === "Shoes") return 1;
  if (niche === "Autmobile") return 2;
  if (niche === "Accessory") return 3;
  if (niche === "Furniture") return 4;
  if (niche === "Mobile Phones") return 5;
  if (niche === "Clothing") return 6;
  if (niche === "Electronics") return 7;
  if (niche === "Home and Appliances") return 8;
  if (niche === "Gifts") return 9;
  if (niche === "Music") return 10;
}

async function addNewPhotos(listingid, files, db) {
  let query = ` INSERT INTO photos (listing_id, photo_1`;
  let queryValues = `VALUES ($1, $2`;

  let photos1 = [listingid];
  let photos = photos1.concat(files);
  console.log(photos);

  if (photos.length >= 3) {
    query += ", photo_2";
    queryValues += `, $3`;
  }
  if (photos.length >= 4) {
    query += ", photo_3";
    queryValues += `, $4`;
  }
  if (photos.length === 5) {
    query += ", photo_4";
    queryValues += `, $5`;
  }
  query = query + `) ` + queryValues + `) RETURNING *`;
  return db
    .query(query, photos)
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(query);
      return err;
    });
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

const getFavourites = (db) => {

}

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
  addNiche,
  getFavourites
};
