const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("color");
const { urlencoded } = require("express");
const DBConnection = require("./config/db");

const port = process.env.PORT || 5000;

DBConnection();
const app = express();

app.use(express());
app.use(urlencoded({ extended: false }));

app.use("/api/todo/", require("./Routes/EntryRoute"));
app.listen(port, () => {
  console.log(`Server is Running of http://localhost:${port}`);
});
