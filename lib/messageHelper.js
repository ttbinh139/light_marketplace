const testHelper = function (db) {
  let query = `SELECT * FROM messages WHERE id = 1`;
  console.log(query);
  return db.query(query)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

module.exports = { testHelper }
