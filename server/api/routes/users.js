const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");

// post request
router.post("/", (req, res, next) => {
  // create a  new user with given details
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  });

  // push user into database and respond with user details, and catch errors if there are any...
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "User saved sucessfully",
        userDetails: {
          name: result.name,
          email: result.email,
          role: result.role,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// get all users
router.get("/", (req, res, next) => [
  User.find()
    .select("name email role deleted")
    .exec()
    .then((users) => {
      res.status(200).json({
        number: users.length,
        userList: users,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    }),
]);

// get pirticular User
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .select("name email role deleted")
    .exec()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete user
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  User.remove({ _id: id })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Successfully deleted the user",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update user
// put request (to update a pirticular product)
router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  // object of updatateoperations to update what I want to update
  const updateOperations = {};
  // considering that our req.body is goind to be an array that we could iterate over to change the values we want to change.
  // adding them as key-value pairs into our operations body.
  for (const ops of req.body) {
    updateOperations[ops.propName] = ops.value;
  }
  console.log(updateOperations);
  // update the product by identifying it using the id and setting the changes to our updateOperations.
  // send results, or errors if there are any.
  User.update({ _id: id }, { $set: updateOperations })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "User updated",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
