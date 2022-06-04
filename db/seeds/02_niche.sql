-- Drop and recreate niche table

DROP TABLE IF EXISTS niche CASCADE;

CREATE TABLE niche (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL
);
