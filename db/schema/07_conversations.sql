-- Drop and recreate conversations table

DROP TABLE IF EXISTS conversations CASCADE;

CREATE TABLE conversations (
  id SERIAL PRIMARY KEY NOT NULL,
  message TEXT NOT NULL,
  created_time TIMESTAMP,
  message_id INTEGER REFERENCES message(id) ON DELETE CASCADE
);
