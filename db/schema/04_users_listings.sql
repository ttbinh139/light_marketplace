-- Drop and recreate users_listings table

DROP TABLE IF EXISTS users_listings CASCADE;

CREATE TABLE users_listings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  listing_id INTEGER REFERENCES listings(id) ON DELETE CASCADE
);
