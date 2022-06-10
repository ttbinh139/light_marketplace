const dbParams = require("./db");

// test helping function to see if data was altered, added or such
const testHelper = function (db) {
  let query = `
  select * FROM favourites
  `;
  return db
    .query(query)
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((err) => {
      return err;
    });
};
// Select id of user with email, used for login
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
// Add a new listing for the listings db.
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
// Edit a listing that is already in the database
function editListing(userid, listing, niche, listingId, db) {
  if (listing["condition"] === "New") {
    listing["condition"] = true;
  } else {
    listing["condition"] = false;
  }
  return db.query(
    `
      UPDATE listings
      SET title = $1, description = $2, price = $3, condition = $4, user_id = $5, niche_id = $6
      WHERE id = $7
      RETURNING * ;
      `,
    [
      listing["title"],
      listing["description"],
      listing["price"],
      listing["condition"],
      userid["id"],
      niche,
      listingId,
    ]
  );
}

// This is to get the newly added listings id
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

// Convert niche_id to corresponding data
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

// function to add new photos to db. This function will depend on how many photos uploaded
async function addNewPhotos(listingid, files, db) {
  let query = ` INSERT INTO photos (listing_id, photo_1`;
  let queryValues = `VALUES ($1, $2`;

  let photos1 = [listingid];
  let photos = photos1.concat(files);

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
      return result;
    })
    .catch((err) => {
      return err;
    });
}
// function to add  the edited photos from the edit posting
async function editPhotos(listingid, files, db) {
  console.log("RIGHT FILES?", files);
  let query = ` UPDATE photos SET photo_1 = '${files[0]}'`;

  if (files.length >= 2) {
    query = query + `, photo_2 =  + '${files[1]}'`;
  }
  if (files.length >= 3) {
    query = query + `, photo_3 =  + '${files[2]}'`;
  }
  if (files.length === 4) {
    query = query + `, photo_4 =  + '${files[3]}'`;
  }
  query = query + ` WHERE listing_id = ` + listingid + `;`;
  console.log(query);
  return db
    .query(query)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
// Function to get all listing from user
const getListings = (listingid, db) => {
  let query = `
    SELECT * FROM listings
    WHERE id = $1;
  `;
  return db
    .query(query, [listingid])
    .then((result) => {
      if (result.rows[0] === undefined) {
        return [];
      }
      return result.rows;
    })
    .catch((err) => {
      return err;
    });
};
// Function to get users info with email
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
// function to login
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
// Function to get all listing info with user_id
const getListingsInfo = (userid, db) => {
  let query = `
    SELECT * FROM listings
    WHERE user_id = $1;
  `;
  return db
    .query(query, [userid["id"]])
    .then((result) => {
      if (result.rows[0] === undefined) {
        return [];
      }
      return result.rows;
    })
    .catch((err) => {
      return err;
    });
};
// Thiis to see all the listings info for the edit
const getListingsInfoEdit = (listing_id, db) => {
  let query = `
  SELECT * FROM listings
  WHERE id = ${listing_id};
`;
  return db
    .query(query)
    .then((result) => {
      if (result.rows[0] === undefined) {
        return [];
      }
      return result.rows;
    })
    .catch((err) => {
      return err;
    });
};
// This is to select all pictures corresponding to the listing
function getPictures(listingid, db) {
  let query = `
    SELECT * FROM photos
    WHERE listing_id = ${listingid};
 `;
  return db
    .query(query)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return err;
    });
}
// Reverse function of niche_id to corresponding data
function nicheIdToChar(niche_id) {
  if (niche_id === 1) return "Shoes";
  if (niche_id === 2) return "Autmobile";
  if (niche_id === 3) return "Accessory";
  if (niche_id === 4) return "Furniture";
  if (niche_id === 5) return "Mobile Phones";
  if (niche_id === 6) return "Clothing";
  if (niche_id === 7) return "Electronics";
  if (niche_id === 8) return "Home and Appliances";
  if (niche_id === 9) return "Gifts";
  if (niche_id === 10) return "Music";
}
// To update an item as sold
function markAsSold(listing_id, db) {
  let query = `
 UPDATE listings SET active = false
 WHERE id = ${listing_id};
`;
  return db
    .query(query)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
// Function to delete a listing
function deleteListing(listing_id, db) {
  let query = `
  DELETE FROM photos
  WHERE listing_id = ${listing_id};

  DELETE FROM favourites
  WHERE listing_id = ${listing_id};

  DELETE FROM listings
  WHERE id = ${listing_id};
  `;
  return db
    .query(query)
    .then((result) => {})
    .catch((err) => {
      console.log(err);
      return err;
    });
}
// Function to get  all the favourit listing of the user
function getFavourites(user_id, db) {
  let query = `
  SELECT * FROM favourites
  WHERE user_id = ($1)
  `;
  return db
    .query(query, [user_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
// Function to remove a listing from favourites.
function removeFav(user_id, listingid, db) {
  let query = `
  DELETE FROM favourites
  WHERE id = ${listingid} AND user_id = ${user_id} ;
  `;
  return db
    .query(query)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

module.exports = {
  getListings,
  getListingsInfo,
  testHelper,
  login,
  getIdWithEmail,
  addNewListing,
  addNewPhotos,
  getAddedListingId,
  getPictures,
  addNiche,
  getListingsInfoEdit,
  nicheIdToChar,
  editListing,
  editPhotos,
  markAsSold,
  getFavourites,
  deleteListing,
  removeFav,
};
