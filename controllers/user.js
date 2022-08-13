const User = require("../models/user");

const person = {};

exports.createUser = async (req, res) => {
  for (let [key, value] of Object.entries(req.body)) {
    person[key] = value;
  }
  if (Object.keys(person).length === 5) {
    const user = new User(person);
    user
      .save()
      .then(() => {
        return res.status(201).json({ success: true, data: user });
      })
      .catch((err) => {
        return res.status(400).json({ success: false, err });
      });
  } else {
    res.status(403).json({
      data: person,
    });
  }
};
