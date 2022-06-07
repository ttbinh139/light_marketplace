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

const getUserNameFromId = function(userId, db) {
  let query = `SELECT users.name
              FROM users
              WHERE id = $1`;
  return db.query(query, [userId])
    .then(data => {
      //console.log(data.rows[0]);
      return data.rows[0];
    })
    .catch(err => {
      return err;
    })
}

async function getAllMessagesByUserId(userId, db) {
  let query = `SELECT *
              FROM messages
              WHERE sender_id = $1 OR receiver_id = $1`;
  let data = await db.query(query, [userId]);
  //console.log(data.rows);
  for (let idx = 0; idx < data.rows.length; idx++) {
    let senderId = data.rows[idx]['sender_id'];
    let receiverId = data.rows[idx]['receiver_id'];

    let sender = await getUserNameFromId(senderId, db)
    let receiver = await getUserNameFromId(receiverId, db)

    data.rows[idx]['sender'] = sender.name;
    data.rows[idx]['receiver'] = receiver.name;
  }
  //console.log("After add sender and receiver", data.rows);
  return data.rows;
}

async function getListingFromId(listingId, db) {
  let query = `SELECT *
              FROM listings
              WHERE id = $1`;
  let data = await db.query(query, [listingId]);
  return data.rows[0];
}

async function getConversationByMessageId(message_id, db) {
  let query = `SELECT *
              FROM conversations
              WHERE message_id = $1`;
  let data = await db.query(query, [message_id]);
  console.log(data);
  return data.rows;
}

module.exports = { testHelper, getAllMessagesByUserId, getUserNameFromId, getListingFromId, getConversationByMessageId }
