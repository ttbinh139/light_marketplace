// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();
const morgan = require("morgan");
const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "user_id",
    keys: ["hello"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));
app.use(fileUpload());
/**
 * Define routing
 */
const usersRoutes = require("./routes/users");
const listingsRoutes = require("./routes/listings");
const messagesRoutes = require("./routes/messages");
const newadRoutes = require("./routes/newad");
const loginRoutes = require("./routes/login");
const accountRoutes = require("./routes/account");

//const widgetsRoutes = require("./routes/widgets");

/**
 * ROUTING for API
 */
/* app.use("/api/users", usersRoutes(db));
app.use("/api/listings", listingsRoutes(db));
app.use("/api/messages", messagesRoutes(db)); */
//app.use("/api/newad", newadRoutes(db));

/**
 * ROUTING for normal requests
 */
app.use("/users", usersRoutes(db));
app.use("/listings", listingsRoutes(db));
app.use("/messages", messagesRoutes(db));
app.use("/newad", newadRoutes(db));
app.use("/login", loginRoutes(db));
app.use("/account", accountRoutes(db));
app.use(
  fileUpload({
    createParentPath: true,
  })
);

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  const templateVars = {
    userId: req.session.userId,
  };
  res.render("index", templateVars);
});

/*
app.get("/messages", (req, res) => {
  res.render("messages");
});
app.get("/newmessage", (req, res) => {
  res.render("newmessage");
});
app.get("/listings", (req, res) => {
  res.render("listings");
});*/

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
