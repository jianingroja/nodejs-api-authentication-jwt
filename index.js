const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//import Routes
const authRoute = require("./Route/auth");
const postRoute = require("./Route/posts");

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () => {
  console.log("connect to db");
});

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

//test
// app.get("/", (req, res) => {
//   res.send("Hello express!");
// });

app.listen(3000, () => {
  console.log("Server up and running");
});
