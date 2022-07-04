Light MarketPlace
=========
 
Light Marketplace is a marketplace for all users created with Javascript, Express.js, and styled with vanilla CSS. Users can sign up and create postings to sell items, or just browse all the items that are avaliable in the marketplace. There is also a chat function set up so users can real time message others users regarding the items posted. 

## Built with 

- Javascript 
- Node.js 
- Express.js 
- PostgreSQL 

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Functionality 

### Main Page

The Main page is very simple for all users to use. It consists of a navigation bar at the top (the navigation bar is fixed, so it will show for all pages), a title picture of a bazzar and the list of all the selling posts. 

 ![MainPage](https://github.com/ttbinh139/light_marketplace/blob/master/planning/Front%20Page.png?raw=true) 

### Selling 

Users that are logged in are able to create a post to sell an item. To create a new ad, users needs to input a title, price, condition, the type of item that the user is sending, a description and at least one and up to 4 pictures. Cool feature : Picture actualyl shows the thumbnail the moment the user uploads the picture! Pictures are also saved in the app so that it can be used to show the ads. 

 ![Create Posting](https://github.com/ttbinh139/light_marketplace/blob/master/planning/Create.png?raw=true)
 ![Picture has thumbnail showing!](https://github.com/ttbinh139/light_marketplace/blob/master/planning/Create2.png?raw=true)
 

### Buying/Search

Users are able to search for the type of items they wish to buy and the web page will filter out what the user would like. Users can also click on the "Buying" button on the top to be led to the listings page where it shows all the listings avaliable. There is also a filter option on the side where users can set the minimum price, the maximum price, the type of items they are looking for and the condition of the item as well. 

 ![Listings page](https://github.com/ttbinh139/light_marketplace/blob/master/planning/Listings%20page.png?raw=true)

### Specific Ad page 

The ads page has the pictures of the ads that can be navigated with the arrows on the bottom left of the pictures. There is also a message and a favorite button where users will be redirected to the message page to send messages to the seller live. THe favorite button will add the specific listings to the users favorites. Then, it consists of the description of the item at the bottom. 

![Specific_Ad](https://github.com/ttbinh139/light_marketplace/blob/master/planning/specificad.png?raw=true)

### Accounts Page

Users account apge will have all the users information from name, email, address and the listings the users are selling, the listings the users have placed as favourites and the users messages. On the my listings sections, users can click on the listings to be redirected to the specific listings page or click on edit to edit the listings, delete to delete the listings or mark as sold so that other users who view the listings will see its not for sale anymore. On the favourites sections, users can click on remove to remove the specific listings on the favorites. On the my message sections, users can click on the envelope to be redirected to the message page. 

![Profile_Page](https://github.com/ttbinh139/light_marketplace/blob/master/planning/Account%20page.png?raw=true)

### Messages 

Users are able to message to enquire about ads that are being sold. There is a chat sidebar that shows all the users chatting history as well as the title of the ads, the corresponding messages and when the posting was made. 

![Messages](https://github.com/ttbinh139/light_marketplace/blob/master/planning/Message.png?raw=true)

## Dependencies 

  - Chalk ^2.4.2
  - Cookie-session ^2.0.0
  - Dotenv ^2.0.0
  - EJS ^2.6.2
  - Express ^4.18.1
  - Express-fileupload ^1.4.0
  - Express-session ^1.17.3
  - Morgan ^1.9.1
  - pg ^8.5.0
  - SASS ^1.35.1

## Development and contributing

Feel free to send pull requests and raise issues.

## Acknowledgements

Binh Trinh - Messaging section and backend 
Sang Lee - Profile, create/edit listings
Kevin Holmes - Buying, filter, frontend
