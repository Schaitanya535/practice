const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors');

const userRoute = require("./api/routes/users");
// activate express app
const app = express();

// connect to mongoDB data Base
mongoose.connect(
  "mongodb+srv://chaitanya:chaitanya@cluster0.fwmtb.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//use the middle ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("combined"));

// Handle CORS error
/*
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Accept, X-Requested-With, Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, GET, DELETE, POST");
    res.status(200).json({});
  }
  next();
});
*/

app.use(cors())

app.use("/", userRoute);

// Handle 404 error
app.use((req, res, next) => {
  const error = new Error("Page not Found");
  error.status = 404;
  next(error);
});

// Handle other errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(3000, () => {
  console.log("express app started");
});
