const express = require("express");
const User = require("../controllers/user");

const router = express.Router();

router.post("/add", User.createUser);

module.exports = router;
