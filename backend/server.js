const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/notes");

app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});

