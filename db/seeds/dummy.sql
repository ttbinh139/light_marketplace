-- Users table seeds here (Example)

INSERT INTO users (id, name, email, address) VALUES (1, 'Armand Hilll', 'lera_hahn@dickens.org',' 8713 Lakewood Lane La Sarre, QC J9Z 7V2');

INSERT INTO users (id, name, email, address) VALUES (2, 'Stephanie Wolff', 'darius.homenick@to.com', '34 Williams Ave. Bath, NB E7J 5K7');

INSERT INTO users (id, name, email, address) VALUES (3, 'Stan Miller', 'mcdermott.maxie@schoen', '7920 Miles Ave. Blackville, NB E9B 4T4');

INSERT INTO users (id, name, email, address) VALUES (4, 'Elliot Dickinson','derrick_pollich@gmail.com','20 Buttonwood Street Saint-Leonard, NB E7E 3H8');

INSERT INTO users (id, name, email, address) VALUES (5, 'Lloyd Boehm', 'ebba.deckow@yahoo.com', '83 Beacon Ave. Corner Brook, LB A2H 4E4');

INSERT INTO users (id, name, email, address) VALUES (6, 'Erna Cassin', 'miguel.barrows@yahoo.com', '12 Tunnel Court La Prairie, QC J5R 9S9');

INSERT INTO users (id, name, email, address) VALUES (7, 'Edison Brown', 'alysha.daniel@boye','324 Sugar Street Labrador City, LB A2V 9C0');

INSERT INTO users (id, name, email, address) VALUES (8, 'Lionel Morar', 'bradtke.mallie@yahoo.com','51 Elm Lane Sainte-Julie, QC J3E 5P2');

INSERT INTO users (id, name, email, address) VALUES (9, 'Donnie Lueilwitz', 'kattie_dibbert@winnifred.nom','211 S. Creek Rd. Val-dOr, QC J9P 2E0');

INSERT INTO users (id, name, email, address) VALUES (10, 'Obie Howell', 'elisha_wisoky@gmail.com', '691 W. 8th Drive Morden, MB R6M 1Y3');

-- Niches table seeds here (Example)

INSERT INTO niches (id, title)
VALUES (1, 'Shoes');

INSERT INTO niches (id, title)
VALUES (2, 'Automobile');

INSERT INTO niches (id, title)
VALUES (3, 'Accessory');

INSERT INTO niches (id, title)
VALUES (4, 'Furniture');

INSERT INTO niches (id, title)
VALUES (5, 'Mobile Phones');

INSERT INTO niches (id, title)
VALUES (6, 'Clothing');

INSERT INTO niches (id, title)
VALUES (7, 'Electronics');

INSERT INTO niches (id, title)
VALUES (8, 'Home and Appliances');

INSERT INTO niches (id, title)
VALUES (9, 'Gifts');

INSERT INTO niches (id, title)
VALUES (10, 'Music');

-- Listings table seeds here (Example)

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Selling new shoes!', 'Selling pair of red shoes from Prada. Conditions are like brand new and size are 8 women. Email please!', '50', TRUE, TRUE, 1, 1);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Selling mens watch!', 'Selling Tom Browne watch. Conditions are like brand new. Email please!', '500', TRUE, TRUE, 2, 3);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id)
VALUES ('Selling women clothing!', 'Selling alot of women clothing! Have a LG pink shirt, a blouse and size 28 pants! 50 dollars each', '50', TRUE, FALSE, 3, 6);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Selling used couch!', 'Selling white couch. Used for 10 years. Email please!', '300', TRUE, FALSE, 4, 4);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Selling Galaxy S20!', 'Selling a BNIB Galaxy S20!', '500', TRUE, TRUE, 5, 5);

-- users_listing table seeds here (Example)

INSERT INTO users_listings (listing_id) VALUES (1);

INSERT INTO users_listings (listing_id) VALUES (2);

INSERT INTO users_listings (listing_id) VALUES (3);

INSERT INTO users_listings (listing_id) VALUES (4);

INSERT INTO users_listings (listing_id) VALUES (5);


-- photo table seeds here (Example)

INSERT INTO photos (photo_1, photo_2,listing_id)
VALUES ('https://i.ebayimg.com/images/g/g2IAAOSwo~FiJ3Kq/s-l1600.jpg','https://i.ebayimg.com/images/g/Jh8AAOSwFMtiJ3Kt/s-l1600.jpg',1);

INSERT INTO photos (photo_1, photo_2, photo_3, listing_id)
VALUES ('https://i.ebayimg.com/images/g/K5EAAOSwau1hFy8K/s-l1600.jpg','https://i.ebayimg.com/images/g/37wAAOSwH3xhFy8Z/s-l1600.jpg', 'https://i.ebayimg.com/images/g/gHkAAOSw0EVhFy8S/s-l1600.jpg', 2);

INSERT INTO photos (photo_1, photo_2, photo_3, listing_id)
VALUES ( 'https://i.ebayimg.com/images/g/Mo4AAOSwJ1dh35KL/s-l1600.jpg', 'https://i.ebayimg.com/images/g/GFAAAOSwjY1ijINc/s-l1600.jpg','https://i.ebayimg.com/images/g/UCUAAOSwaDtiecg3/s-l1600.jpg',3);

INSERT INTO photos (photo_1, listing_id)
VALUES ('https://i.ebayimg.com/images/g/5BgAAOSweh9ijq5I/s-l1600.jpg',4);

INSERT INTO photos (photo_1, photo_2, photo_3, photo_4, listing_id)
VALUES ('https://i.ebayimg.com/images/g/cOcAAOSwgHFh~s28/s-l1600.png', 'https://i.ebayimg.com/images/g/MZQAAOSwordh~s28/s-l1600.png', 'https://i.ebayimg.com/images/g/MZQAAOSwordh~s28/s-l1600.png', 'https://i.ebayimg.com/images/g/MZQAAOSwordh~s28/s-l1600.png',5);


-- messages table seeds here (Example)

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (1, '2018-02-12T08:00:00.000Z', 1, 6, 1);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (2, '2018-02-12T08:00:00.000Z', 6, 1, 1);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (3, '2018-02-12T08:00:00.000Z', 2, 7, 2);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (4, '2018-02-12T08:00:00.000Z', 3, 8, 3);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (5, '2018-02-12T08:00:00.000Z', 8, 3, 3);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (6, '2018-02-12T08:00:00.000Z', 4, 9, 4);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (7, '2018-02-12T08:00:00.000Z', 5, 10, 5);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (8, '2018-02-12T08:00:00.000Z', 5, 10, 5);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (9, '2018-02-12T08:00:00.000Z', 5, 10, 5);

-- conversation table seeds here (Example)

INSERT INTO conversations (id, message, created_time,message_id) VALUES (1, 'Hey can you accept lower prices?', '2018-02-12T08:00:00.000Z', 1);

INSERT INTO conversations (id, message, created_time,message_id) VALUES (2, 'Sure how much were you thinking?', '2018-02-12T08:00:00.000Z', 2);

INSERT INTO conversations (id, message, created_time,message_id) VALUES (3, 'Hey is this real?', '2018-02-12T08:00:00.000Z', 3);

INSERT INTO conversations (id, message, created_time,message_id) VALUES (4, 'Can you go lower on the pink shirt?', '2018-02-12T08:00:00.000Z', 4);

INSERT INTO conversations (id, message, created_time,message_id) VALUES (5, 'No... this is lowest I can go :(', '2018-02-12T08:00:00.000Z', 5);

INSERT INTO conversations (id, message, created_time,message_id) VALUES (6, 'Thats so expensive.', '2018-02-12T08:00:00.000Z', 6);

INSERT INTO conversations (id, message, created_time,message_id) VALUES (7, 'Is there any scratches?', '2018-02-12T08:00:00.000Z', 7);

INSERT INTO conversations (id, message, created_time,message_id) VALUES (8, 'No of course not!', '2018-02-12T08:00:00.000Z', 8);

INSERT INTO conversations (id, message, created_time,message_id) VALUES (9, 'No problem', '2018-02-12T08:00:00.000Z', 9);


