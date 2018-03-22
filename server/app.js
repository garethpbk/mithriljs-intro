const express = require("express");

const app = express();

app.use(express.static("dist"));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
});

module.exports = app;
