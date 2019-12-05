const express = require("express");
const ejs = require("ejs");
const app = express();

PORT = 8080;

app.use("/static", express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/sucess", (req, res) => {
  res.render("succes");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(PORT);