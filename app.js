"use strict";

const express = require("express");
const app = express();
const PORT = 3002 || 3003;
const bodyParser = require("body-parser");

// app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/about", (req, res) => {
  res.status(200).send({ info: "This is an about page." });
});

app.post("/data", (req, res) => {
  res.status(200).send({ info: "This is an data page." });
});

//app.listen stays on the bottom.

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
