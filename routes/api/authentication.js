const express = require("express");
const router = express.Router();
const {
  userRegistration,
  getUser,
} = require("../../controllers/userRegistrationController");

router.post("/registration", userRegistration);

router.get("/users",getUser)

module.exports = router;
