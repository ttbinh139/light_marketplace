Light MarketPlace
=========
 
Light Marketplace is a marketplace for all users created with Javascript, Express.js, and styled with vanilla CSS. Users can sign up and create postings to sell items, or just browse all the items that are avaliable in the marketplace. There is also a chat function set up so users can real time message others users regarding the items posted. 

## Built with 

- Javascript 
- Node.js 
- Express.js 
- PostgreSQL 
- Cookie-Session 

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


