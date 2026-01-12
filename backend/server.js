const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
// middlewares 
app.use(cors());
app.use(express.json());
// routes 
const contactRoute = require("./routers/contactRoutes");
app.use("/api", contactRoute);

// MongoDB connection 
mongoose.connect("mongodb://127.0.0.1:27017/contactDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
// test route 
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(5000, () => {
  console.log("Server started on port 5000");
});