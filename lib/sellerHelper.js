const dbParams = require("./db");

const testHelper = function (db) {
  let query = `SELECT * FROM users WHERE id = 1`;
  console.log(query);
  return db
    .query(query)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const addNewAd = function (db) {
  let query = `INSERT INTO listings (title, description, price, image_url, user_id) VALUES ('test', 'test', 'test', 'test', 1)`;
  console.log(query);
  return db
    .query(query)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const getUserWithEmail = (email, db) => {
  return db
    .query(`SELECT * FROM users WHERE users.email = $1`, email)
    .then((result) => {
      if (result.rows[0] === undefined) {
        console.log(result.rows[0]);
        return null;
      }
      console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log("thiserror");
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

module.exports = { testHelper, login };
