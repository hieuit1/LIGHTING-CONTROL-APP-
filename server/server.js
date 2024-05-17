// file: server.js
// const axios = require("axios");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Kết nối với cơ sở dữ liệu MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/applight", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB successfully");
});

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

app.use(bodyParser.json());

// Endpoint để nhận dữ liệu từ màn hình đăng ký và thêm vào cơ sở dữ liệu
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
