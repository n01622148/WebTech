/* Project setup: For the server
1 - new project folder
2 - open an integrated terminal
3 - run these commands:
    npm init -y
    npm i express nodemon
    (optional) -> go into package.json and add "type": "module" to enable import from
*/

// [Please enable only ONE of these]
import express from "express"; // if you are using type: module
//const express = require("express"); // if using common JS (Default)

import logger from "./middleware/logger.js";
import auth from "./middleware/auth.js";

const app = express();
const PORT = process.env.PORT || 8000;

// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger); //appwide

// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.get("/profile", auth, (req, res) => {
    res.send("Welcome to you profile page");
  });

app.get("/01", (req, res) => {
  res.send("Welcome to our server - 01");
});

app.get("/02", (req, res) => {
  res.send("Welcome to our server - 02");
});

app.get("/03", (req, res) => {
  res.send("Welcome to our server");
});

app.get("/04", (req, res) => {
  res.send("Welcome to our server");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
  res.status(404).send("Page not found");
});

//app.method("/endpoint", return function)
