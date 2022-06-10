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

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Selling Galaxy S20!', 'Selling a BNIB Galaxy S20!', '500', TRUE, TRUE, 5, 6);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('2017 CHEVROLET EQUINOX PREMIER', '2017 CHEVROLET EQUINOX PREMIER AWD 4 cylinder engine, Automatic transmission, All wheel drive, Navigation, Safety features, Leather seats, Power memory drivers seat, Back up camera, Bluetooth, Cruise control, Power lift gate, Keyless entry, Push button start, USB ports, AUX in, Pioneer sound system, Sunroof, Alloys', '25000', TRUE, FALSE, 3, 2);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('2011 Mercedes CL63', 'INFO: Local BC Car, No Lien, 84,000 KM ONLY, AMG, 5.5L Bi-Turbo V8, Grey on Black leather, Fully loaded features and options with Performance Package, Carbon fiber interior trims, Leather and suede sport steering with paddle shift, Navigation system, Back up camera, Premium Harman/Kardon sound system, Front and rear parking assist, Rear power sunshade, Front heated and ventilate seats, Front Massage seats, Blind spot monitor, Lane keep assist, Power sunroof, Keyless engine push start with easy access, Bluetooth, In-dash CD changer, USB/AUX input, Dual zone auto climate control, Soft touch door close, Night vision, Power trunk closure, Bi-Xenon headlights, LED fog lights, and MUCH MUCH MORE !!! Very well maintain with Mercedes dealer serviced history records, For more detail Info. Please contact: 604-719-6389', '50000', TRUE, FALSE, 1, 2);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('MacBook Pro 2015 Retina 13"', 'Specs: Macbook Pro 13" retina 2015, Intel Core i5 CPU 2.70ghz, 8GB RAM, 256GB SSD storage, Intel HD 6100 graphics, backlit keyboard, USB, Battery 400 cycles', '550', TRUE, FALSE, 5, 7);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Gibson Historic Custom Shop cs 336', 'Gibson historic custom shop orange burst plain eastern rock (sugar) maple top cs 336 excellent condition. Climate change has created a record number of diseased maple trees producing figured wood and reduced the number of healthy trees producing straight plain tops. Plain tops are getting rare and have a reputation of producing better tone according to many iconic guitarists. Besides flame and red tops are common and sooo yesterday. Check out Reverb.', '3900', TRUE, FALSE, 2, 10);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('PDP (By DW) FXR 22 - Tobacco Burst', '100% birch shells provide rich, punchy tone and outstanding projection. These drums feature Pro-Cut bearing edges, True-Pitch tension rods, STM (Suspension Tom Mounts), and PDPs signature oval lugs. PDPs proprietary shell-making process means that every shell is meticulously crafted and is hand-inspected to assure nothing less than the utmost pro quality.
', '930', TRUE, FALSE, 2, 10);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Prada Royal Blue Top Handle Bag', 'A never used, a dust bag included, Saffiano Leather Pyramid Frame Bag', '2500', TRUE, FALSE, 5, 3);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Herman Miller Aeron Chair - Size B - Fully Loaded', 'Selling Aeron chair with all of the options. $899
All of the adjustments work fine.
Good condition.
Size B. Options: Tilt, Tilt Tension, Tilt Lock, Forward Tilt adjustment, Seat height adjustment, Arm height adjustment, Arm angle adjustment, Adjustable Lumbar support, First come first serve.No lowballing.', '899', TRUE, FALSE, 4, 4);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('LG FRIDGE', 'Exceptional condition and works perfectly. 30x30x69 inches.', '500', TRUE, FALSE, 3, 8);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('BRAND NEW DS Union LA x Air Jordan 4 Retro "Guava Ice" - SIZE 10', '- Brand New (DS), bought from UNION LA directly - Mens Size 10 - Includes everything (hangtag, laces, box, etc) - Can also provide original receipt in my name', '1100', TRUE, TRUE, 4, 1);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Lacquer Gift Box with Lid', 'It has never been used befoer. We bought it from England more than 39 years ago. It is beautifully hand-crafted. The measurement is about 1 1/2" H X 4 1/2" X 3" (" = inches). It is a very thoughtful and wonderful gift for any kind of occasions, especially for a lady.
', '50', TRUE, FALSE, 5, 9);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Iphone 11', 'Unlocked i Phone 11 64GB in mint condition. Kept in case since new with glass screen protector. I purchased new from Apple Store and will provide original invoice.', '350', TRUE, FALSE, 4, 5);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Gaming PC i5 12400F 16Gram 1tb nvme ssd with RTX 3060ti', 'Asus PRIME B660M-A D4 w/ DDR4-5333 (OC) 7.1 Audio, Dual M.2, Gigabit LAN, Core™ i5-12400F Processor, 2.5GHz w/ 6 Cores / 12 Threads, air Cooler, 1 TB nvme ssd, XPG 8G*2 3200mhz ram, Zotac RTX 3060 ti 8G, proload win 10 pro', '1599', TRUE, FALSE, 2, 7);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Levis x Pokémon 551Z Authentic Straight Jeans Garden Multicolor', 'Brand new never worn. Still has the tags. Size 36 waist 32 leg', '225', TRUE, TRUE, 3, 6);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('New LawnMaster 18 Inch Electric 3 in 1 Lawn Mower', 'Selling a LawnMaster 18 inch electric 3 in 1 lawn mower. It has been opened but never been used. Retail price is $250 CAD before tax. Clearance sale before we move out of Vancouver next month. Features: -18 inch cutting width -70 litres collection bag with capacity indicator -simple start system -never rust deck -6 cutting positions with one touch height adjustment lever -folding handle with cam locks -large carrying handle on deck -loop style push handle -large 8 inch front & 10 inch rear wheels -mulching plug & side discharge chute included -lightweight 59 Lbs', '200', TRUE, TRUE, 5, 8);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('2020 Honda Civic EX/Low Km/ HONDA CERTIFIED!', 'Kilometres:42,361
Engine: 2.0L 4 Cylinder, Exterior Colour: Black, Interior Colour: Black, Transmission: CVT, Fuel Type: Gas,
HONDA SENSING SAFETY FEATURES
- Collision Mitigation Braking System, Forward Collision Warning, Lane Departure Warning, Lane Keep Assist, Road Departure Mitigation, Adaptive Cruise Control
FEATURES: Honda LaneWatch System, Rearview Camera, Apple CarPlay, Android Auto, Power Adjustable Seats, Heated Front Seats, Heated Side Mirrors, Bluetooth Wireless Smartphone Connectivity, Leather Metal Look Steering Wheel, Keyless Entry with Push Button Start, Electronic Parking Brake', '27997', TRUE, FALSE, 3, 2);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Sumi Vancouver 2010 Olympics Plush Mascot NEW', 'Sumi Vancouver 2010 Olympics Plush Mascot, 8.5", Northern Gifts, New, $5', '5', TRUE, TRUE, 1, 9);

INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Lot of record Vinyls, some sealed', 'Big lot full of Jazz, Folk, Family, Christmas and Hawaiian music', '20', TRUE, FALSE, 5, 10);



INSERT INTO listings (title, description, price, active, condition, user_id, niche_id) VALUES ('Buying Galaxy S20!', 'Selling a BNIB Galaxy S20!', '500', TRUE, TRUE, 1, 5);

-- users_listing table seeds here (Example)

INSERT INTO favorites (listing_id, user_id) VALUES (1, 1);

INSERT INTO favorites (listing_id, user_id) VALUES (2, 1);

INSERT INTO favorites (listing_id, user_id) VALUES (3, 1);

INSERT INTO favorites (listing_id, user_id) VALUES (4, 1);

INSERT INTO favorites (listing_id, user_id) VALUES (5, 1);

INSERT INTO favorites (listing_id, user_id) VALUES (6, 1);

INSERT INTO users_listings (listing_id) VALUES (6);

INSERT INTO users_listings (listing_id) VALUES (7);

INSERT INTO users_listings (listing_id) VALUES (8);

INSERT INTO users_listings (listing_id) VALUES (9);

INSERT INTO users_listings (listing_id) VALUES (10);

INSERT INTO users_listings (listing_id) VALUES (11);

INSERT INTO users_listings (listing_id) VALUES (12);

INSERT INTO users_listings (listing_id) VALUES (13);

INSERT INTO users_listings (listing_id) VALUES (14);

INSERT INTO users_listings (listing_id) VALUES (15);

INSERT INTO users_listings (listing_id) VALUES (16);

INSERT INTO users_listings (listing_id) VALUES (17);

INSERT INTO users_listings (listing_id) VALUES (18);

INSERT INTO users_listings (listing_id) VALUES (19);

INSERT INTO users_listings (listing_id) VALUES (20);

INSERT INTO users_listings (listing_id) VALUES (21);

INSERT INTO users_listings (listing_id) VALUES (22);


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

<<<<<<< HEAD
INSERT INTO photos (photo_1, photo_2, photo_3, photo_4, listing_id)
VALUES ('https://i.ebayimg.com/images/g/cOcAAOSwgHFh~s28/s-l1600.png', 'https://i.ebayimg.com/images/g/MZQAAOSwordh~s28/s-l1600.png', 'https://i.ebayimg.com/images/g/MZQAAOSwordh~s28/s-l1600.png', 'https://i.ebayimg.com/images/g/MZQAAOSwordh~s28/s-l1600.png',6);
=======
INSERT INTO photos (photo_1, photo_2, listing_id)
VALUES ('https://images.craigslist.org/00N0N_aX0LYTFcJXjz_0CI0t2_600x450.jpg', 'https://images.craigslist.org/00j0j_3D0y8FeOOknz_0CI0t2_600x450.jpg',6);

INSERT INTO photos (photo_1, photo_2, photo_3, photo_4, listing_id)
VALUES ('https://images.craigslist.org/00505_FjxjlzS1q8z_0t20t2_600x450.jpg', 'https://images.craigslist.org/01414_47u8jyEcYsfz_0t20t2_600x450.jpg', 'https://images.craigslist.org/00202_cB72W7ykAd3z_0CI0t2_600x450.jpg', 'https://i.ebayimg.com/images/g/MZQAAOSwordh~s28/s-l1600.png',7);

INSERT INTO photos (photo_1, listing_id)
VALUES ('https://images.craigslist.org/00l0l_cb0nr4hE5kMz_0kH0eY_600x450.jpg',8);

INSERT INTO photos (photo_1, listing_id)
VALUES ('https://images.craigslist.org/00a0a_gBDM13wTjhUz_0CI0t2_600x450.jpg',9);

INSERT INTO photos (photo_1, listing_id)
VALUES ('https://images.craigslist.org/00t0t_j4M81uxMtW1z_0ak07K_600x450.jpg',10);

INSERT INTO photos (photo_1, photo_2, listing_id)
VALUES ('https://images.craigslist.org/00P0P_dkfh1eCknWiz_07K0ak_600x450.jpg', 'https://images.craigslist.org/00H0H_jaY7kIvK76az_07K0ak_600x450.jpg', 11);

INSERT INTO photos (photo_1, photo_2, photo_3, listing_id)
VALUES ('https://images.craigslist.org/00x0x_3lbg5sSh2kpz_0t20CI_600x450.jpg', 'https://images.craigslist.org/00G0G_3DaJZp1Wnpmz_0t20CI_600x450.jpg', 'https://images.craigslist.org/00m0m_EGUB9VVzAFz_0t20CI_600x450.jpg', 12);

INSERT INTO photos (photo_1, photo_2, listing_id)
VALUES ('https://images.craigslist.org/00101_jNx9x4gJNhnz_0t20CI_600x450.jpg', 'https://images.craigslist.org/00F0F_41bvDwXaQczz_0t20CI_600x450.jpg', 13);

INSERT INTO photos (photo_1, photo_2, listing_id)
VALUES ('https://images.craigslist.org/00U0U_1JHjx0hbU16z_0c606t_600x450.jpg','https://images.craigslist.org/00707_biLrTLjYmw9z_0CI0t2_600x450.jpg' ,14);

INSERT INTO photos (photo_1, listing_id)
VALUES ('https://images.craigslist.org/00i0i_8Hypr5RAoQk_600x450.jpg',15);

INSERT INTO photos (photo_1, photo_2, listing_id)
VALUES ('https://images.craigslist.org/00V0V_cOkcfChSRJWz_0t20CI_600x450.jpg','https://images.craigslist.org/00909_2ey5mMgMNivz_0t20CI_600x450.jpg', 16);

INSERT INTO photos (photo_1, listing_id)
VALUES ('https://images.craigslist.org/00404_hcq2GwDjyL8z_0uY0hq_600x450.jpg',17);

INSERT INTO photos (photo_1, photo_2, listing_id)
VALUES ('https://images.craigslist.org/00b0b_92baBI7JWmVz_09m09m_600x450.jpg', 'https://images.craigslist.org/00606_8x6oJAXEBWQz_09m09m_600x450.jpg',18);

INSERT INTO photos (photo_1, photo_2, photo_3, listing_id)
VALUES ('https://images.craigslist.org/00303_kUIDftZQo1qz_09G09G_600x450.jpg', 'https://images.craigslist.org/00f0f_eXBplnNzj2Wz_0bo09G_600x450.jpg', 'https://images.craigslist.org/01515_eZpk7aYMM1Az_06o09B_600x450.jpg', 19);

INSERT INTO photos (photo_1, photo_2, photo_3, photo_4, listing_id)
VALUES ('https://images.craigslist.org/01111_1Zlq0M629afz_0gw09R_600x450.jpg','https://images.craigslist.org/00v0v_hCb3BJQhzUfz_0gv08V_600x450.jpg','https://images.craigslist.org/01010_3JETAmdc26Kz_0gw08X_600x450.jpg','https://images.craigslist.org/00J0J_hfVLHUXWyHxz_0gw090_600x450.jpg',20);

INSERT INTO photos (photo_1, photo_2, listing_id)
VALUES ('https://images.craigslist.org/00m0m_cvzCOUr7SeEz_0x40Dl_600x450.jpg','https://images.craigslist.org/00000_7oAlRL7KUVCz_0ve0FE_600x450.jpg',21);

INSERT INTO photos (photo_1, photo_2, listing_id)
VALUES ('https://images.craigslist.org/00l0l_cQuew8gu0Hsz_0t20CI_600x450.jpg','https://images.craigslist.org/00H0H_1T23CQfgsrYz_0t20CI_600x450.jpg',22);

>>>>>>> f2f5597161318aae2f11bb2cd1c902b12d7570d9


-- messages table seeds here (Example)

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (1, '2018-02-12T08:00:00.000Z', 1, 6, 1);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (2, '2018-02-12T08:00:00.000Z', 6, 1, 1);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (3, '2018-02-12T08:00:00.000Z', 2, 7, 2);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (4, '2018-02-12T08:00:00.000Z', 3, 8, 3);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (5, '2018-02-12T08:00:00.000Z', 8, 3, 3);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (6, '2018-02-12T08:00:00.000Z', 4, 9, 4);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (7, '2018-02-12T08:00:00.000Z', 5, 10, 5);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (8, '2018-02-12T08:00:00.000Z', 10, 5, 5);

INSERT INTO messages (id, created_time, receiver_id, sender_id, listing_id) VALUES (9, '2018-02-12T08:00:00.000Z', 5, 10, 5);

-- conversation table seeds here (Example)

INSERT INTO conversations (id, message, created_time, message_id, owner_id) VALUES (1, 'Hey can you accept lower prices?', '2018-02-12T08:00:00.000Z', 1, 6);

INSERT INTO conversations (id, message, created_time, message_id, owner_id) VALUES (2, 'Sure how much were you thinking?', '2018-02-12T08:00:00.000Z', 2, 1);

INSERT INTO conversations (id, message, created_time, message_id, owner_id) VALUES (3, 'Hey is this real?', '2018-02-12T08:00:00.000Z', 3, 7);

INSERT INTO conversations (id, message, created_time, message_id, owner_id) VALUES (4, 'Can you go lower on the pink shirt?', '2018-02-12T08:00:00.000Z', 4, 8);

INSERT INTO conversations (id, message, created_time, message_id, owner_id) VALUES (5, 'No... this is lowest I can go :(', '2018-02-12T08:00:00.000Z', 5, 3);

INSERT INTO conversations (id, message, created_time, message_id, owner_id) VALUES (6, 'Thats so expensive.', '2018-02-12T08:00:00.000Z', 6, 9);

INSERT INTO conversations (id, message, created_time, message_id, owner_id) VALUES (7, 'Is there any scratches?', '2018-02-12T08:00:00.000Z', 7, 10);

INSERT INTO conversations (id, message, created_time, message_id, owner_id) VALUES (8, 'No of course not!', '2018-02-12T08:00:00.000Z', 8, 5);

INSERT INTO conversations (id, message, created_time, message_id, owner_id) VALUES (9, 'No problem', '2018-02-12T08:00:00.000Z', 9, 10);

<<<<<<< HEAD
=======
-- favourites table seeds here (Example)

-- INSERT INTO favourites (id, user_id, listing_id) Values (1, 1, 2);

-- INSERT INTO favourites (id, user_id, listing_id) Values (2, 1, 3);

-- INSERT INTO favourites (id, user_id, listing_id) Values (3, 1, 5);

-- INSERT INTO favourites (id, user_id, listing_id) Values (4, 2, 3);

-- INSERT INTO favourites (id, user_id, listing_id) Values (5, 2, 1);

-- INSERT INTO favourites (id, user_id, listing_id) Values (6, 2, 2);

-- INSERT INTO favourites (id, user_id, listing_id) Values (7, 3, 2);

-- INSERT INTO favourites (id, user_id, listing_id) Values (8, 3, 5);

-- INSERT INTO favourites (id, user_id, listing_id) Values (9, 4, 5);

-- INSERT INTO favourites (id, user_id, listing_id) Values (10, 5, 1);

-- INSERT INTO favourites (id, user_id, listing_id) Values (11, 5, 2);

-- INSERT INTO favourites (id, user_id, listing_id) Values (12, 5, 3);

-- INSERT INTO favourites (id, user_id, listing_id) Values (13, 6, 5);

-- INSERT INTO favourites (id, user_id, listing_id) Values (14, 8, 1);

-- INSERT INTO favourites (id, user_id, listing_id) Values (15, 8, 5);

-- INSERT INTO favourites (id, user_id, listing_id) Values (16, 9, 1);
>>>>>>> f2f5597161318aae2f11bb2cd1c902b12d7570d9
