-- Drop and recreate niche table

DROP TABLE IF EXISTS niches CASCADE;

CREATE TABLE niches (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL
);
