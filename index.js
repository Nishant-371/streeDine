const express = require("express");
const db = require("./config/database");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const routes = require("./routes/employee");

app.use("api/v1", routes);

app.listen(PORT, () => {
  console.log(`sever started ${PORT}`);
});

db();

app.get("/", (req, res) => {
  res.send(`<h1>welcome</h1>`);
});
