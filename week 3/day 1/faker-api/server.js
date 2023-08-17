const express = require("express");
const faker = require("@faker-js/faker");

const port = 5000;
const app = express();
const server = app.listen(port, () => {
  console.log(`this serveur is working right now ${port}`);
});

app.get("/api", (req, res) => {
  res.send("hello /api is work thats great ");
});
