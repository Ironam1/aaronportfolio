const express = require("express");
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded( {extended: true } ));

