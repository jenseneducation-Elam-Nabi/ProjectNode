const express = require("express");
const app = express();

PORT = 8080;


app.set("view engine", "ejs");
app.use("/static", express.static("public"));

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

app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(PORT, () => console.log(`Server is running on Localhost:${PORT}...`));