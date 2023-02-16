const User = require("../models");
const bcrypt = require("bcrypt");

exports.signUp = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      password: hash,
      email: req.body.email,
      roll: req.body.roll,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "user created!!!",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Invalid authentication credentials!",
          err: err,
        });
      });
  });
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth Failed Please Try Again!",
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth Failed",
        });
      }
      res.status(200).json(fetchedUser);
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Invalid Authentication Credentials!",
      });
    });
};
