-- Drop and recreate message table

DROP TABLE IF EXISTS message CASCADE;

CREATE TABLE message (
  id SERIAL PRIMARY KEY NOT NULL,
  created_time TIMESTAMP,
  receiver_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  listing_id INTEGER REFERENCES listings(id) ON DELETE CASCADE
);
