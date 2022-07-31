"use strict";

const { resolveSoa } = require("dns");
const express = require("express");
const app = express();

//routing
const home = require("./src/routes/home");


app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;
