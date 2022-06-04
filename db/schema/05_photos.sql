-- Drop and recreate photos table

DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY NOT NULL,
  photo_1 VARCHAR(255) NOT NULL,
  photo_2 VARCHAR(255),
  photo_3 VARCHAR(255),
  photo_4 VARCHAR(255),
  listing_id INTEGER REFERENCES listings(id) ON DELETE CASCADE
);
