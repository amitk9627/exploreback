const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = process.env.port;

// database connection
const connectDB = async () => {
  await mongoose.connect(process.env.mongodb);
};
connectDB()
  .then(() => console.log("mongodb connection established..."))
  .catch(() => console.log("mongo disconnected..."));

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log("server is live ... ", port);
});
