const userSchema = require("../models/userSchema");
const userList = require("../models/userSchema");

function userRegistration(req, res) {
  const { firstName, lastName, email, password, phoneNumber, address } =
    req.body;
    if(!firstName && !lastName){
      res.send({ error: "FastName or last Name is required" });
    }

  const user = userList({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    address,
  });

  user.save();
}

async function getUser(req, res) {
  const userList = await userSchema.find({});
  res.send(userList);
}

module.exports = { userRegistration, getUser };
