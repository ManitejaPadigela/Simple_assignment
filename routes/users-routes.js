const express = require("express");

const usersController = require("../controllers/users-controllers");

const router = express.Router();

//router.get("/", usersController.getUsers);
router.get("/login", (req, res, next) => {
  res.send(
    '<form action="/login" method="POST"><input type="email" name="email" placeholder="Enter your Email"><input type="password" name="password" placeholder="Enter your Password"><button type="submit">Login</button></form>'
  );
});

router.get("/signup", (req, res, next) => {
  res.send(
    '<form action="/signup" method="POST"><input type="text" name="name" placeholder="Enter your name" /><br /><input type="email" name="email" placeholder="Enter Email" /><br /><input type="password" name="password" placeholder="Enter a Password" /><br /><button type="submit">Log in</button></form>'
  );
});

router.get("/users", usersController.getUsers);

router.post("/signup", usersController.signup);

router.post("/login", usersController.login);

module.exports = router;
