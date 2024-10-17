const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/login", (req, res) => {
  res.send("<h1>This is Login Page </h1>");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
