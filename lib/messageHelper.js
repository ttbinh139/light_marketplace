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

const getLastestMessageByUserId = function(userId, db) {
  let query = `SELECT *
              FROM messages
              WHERE sender_id = $1 OR receiver_id = $1
              ORDER BY created_time
              LIMIT 1`;
  return db.query(query, [userId])
    .then(data => {
      console.log(data);
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
              JOIN users ON listings.user_id = users.id
              WHERE listings.id = $1`;
  let data = await db.query(query, [listingId]);
  return data.rows[0];
}

async function getConversationByMessageId(message_id, db) {
  let query = `SELECT *
              FROM conversations
              JOIN messages ON conversations.message_id = messages.id
              WHERE message_id = $1`;
  let data = await db.query(query, [message_id]);
  //console.log(data);
  return data.rows;
}

async function getMessageById(message_id, db) {
  let query = `SELECT *
              FROM messages
              JOIN conversations ON conversations.message_id = messages.id
              JOIN listings ON messages.listing_id = listings.id
              JOIN users ON listings.user_id = users.id
              WHERE message_id = $1`;
  let data = await db.query(query, [message_id]);
  //console.log(data);
  return data.rows[0];
};

async function saveMessage(msgObj, listingId, text, db) {
  console.log(msgObj);
  let insertMessageQuery = `INSERT INTO messages (sender_id, receiver_id ,listing_id, created_time) VALUES ($1, $2, $3, $4) RETURNING *;`;
  console.log("Insert query, line 98: ",insertMessageQuery);
  let insertConversation = `INSERT INTO conversations (message_id, message, owner_id, created_time) VALUES ($1, $2, $3, $4) RETURNING *;`;
  let listingQuery = `SELECT * FROM listings WHERE id=$1`;
  let listing = await db.query(listingQuery, [listingId]);
  let newMessage = await db.query(insertMessageQuery, [msgObj.sender_id, listing.rows[0].user_id, listingId, msgObj.created_time]);
  let newConversation = await db.query(insertConversation,[Number(newMessage.rows[0].id), text, msgObj.sender_id, msgObj.created_time]);
  return newConversation.rows[0];
};

async function insertNewConversation(conObj, db) {
  let insertConversation = `INSERT INTO conversations (message_id, message, owner_id, created_time) VALUES ($1, $2, $3, $4) RETURNING *;`
  let data = await db.query(insertConversation, [conObj.message_id, conObj.message, conObj.owner_id, conObj.created_time]);
  return data.rows[0];
};

module.exports = { testHelper, getAllMessagesByUserId, getUserNameFromId, getListingFromId, getConversationByMessageId, getLastestMessageByUserId,getMessageById, saveMessage, insertNewConversation }
